"""Reproducible video pipeline for the J2B hero and page backgrounds.

Requirements (run once, not part of the web app): `pip install imageio-ffmpeg`

Reads original footage from assets/video-sources/ and writes the optimized,
muted MP4 renditions and poster frames into public/videos/. Original sources
are intentionally kept OUTSIDE public/ so they are not served or deployed.
"""
import subprocess
import os
import imageio_ffmpeg

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()

SCENES = [
    {
        "id": "scene-1-journey",
        "title": "Scene 1: The Journey",
        "source": "Walking_along_woodland_path_94aae41f_1080p.mp4",
        "desktop_name": "scene-1-journey.mp4",
        "mobile_name": "scene-1-journey-mobile.mp4",
        "poster_name": "scene-1-journey-poster.jpg"
    },
    {
        "id": "scene-2-reflection",
        "title": "Scene 2: Reflection",
        "source": "Woman_sitting_by_window_smiling_7d334fbe_1080p.mp4",
        "desktop_name": "scene-2-reflection.mp4",
        "mobile_name": "scene-2-reflection-mobile.mp4",
        "poster_name": "scene-2-reflection-poster.jpg"
    },
    {
        "id": "scene-3-connection",
        "title": "Scene 3: Connection",
        "source": "Four_adults_strolling_together_e42519ed_1080p.mp4",
        "desktop_name": "scene-3-connection.mp4",
        "mobile_name": "scene-3-connection-mobile.mp4",
        "poster_name": "scene-3-connection-poster.jpg"
    },
    {
        "id": "scene-4-becoming",
        "title": "Scene 4: Becoming",
        "source": "Footpath_winding_through_woodland_ae987a2b_1080p.mp4",
        "desktop_name": "scene-4-becoming.mp4",
        "mobile_name": "scene-4-becoming-mobile.mp4",
        "poster_name": "scene-4-becoming-poster.jpg"
    }
]

out_dir = os.path.join("public", "videos")
poster_dir = os.path.join(out_dir, "posters")
os.makedirs(out_dir, exist_ok=True)
os.makedirs(poster_dir, exist_ok=True)

stats = []

for sc in SCENES:
    src = os.path.join("assets", "video-sources", sc["source"])
    if not os.path.exists(src):
        raise FileNotFoundError(f"Missing source video: {src}")
    orig_size = os.path.getsize(src)
    print(f"\nProcessing {sc['title']} ({src}, {orig_size / 1024 / 1024:.2f} MB)...")
    
    # 1. Desktop MP4: 1080p, 24fps, H.264 High profile, CRF 26, faststart, silent
    desktop_out = os.path.join(out_dir, sc["desktop_name"])
    cmd_desktop = [
        ffmpeg, "-y", "-i", src,
        "-c:v", "libx264", "-profile:v", "high", "-level", "4.0",
        "-pix_fmt", "yuv420p", "-crf", "26", "-preset", "slow",
        "-r", "24", "-movflags", "+faststart", "-an",
        desktop_out
    ]
    subprocess.run(cmd_desktop, check=True)
    desktop_size = os.path.getsize(desktop_out)
    
    # 2. Mobile MP4: 720x960 (3:4 portrait-friendly crop focused on center), H.264 Main, CRF 28, faststart, silent
    mobile_out = os.path.join(out_dir, sc["mobile_name"])
    # 1920x1080 -> scale=-1:960, crop=720:960
    cmd_mobile = [
        ffmpeg, "-y", "-i", src,
        "-vf", "scale=-1:960,crop=720:960",
        "-c:v", "libx264", "-profile:v", "main", "-level", "3.1",
        "-pix_fmt", "yuv420p", "-crf", "28", "-preset", "slow",
        "-r", "24", "-movflags", "+faststart", "-an",
        mobile_out
    ]
    subprocess.run(cmd_mobile, check=True)
    mobile_size = os.path.getsize(mobile_out)
    
    # 3. High quality poster frame from 0.5s
    poster_out = os.path.join(poster_dir, sc["poster_name"])
    cmd_poster = [
        ffmpeg, "-y", "-ss", "00:00:00.500", "-i", src,
        "-vframes", "1", "-q:v", "2",
        poster_out
    ]
    subprocess.run(cmd_poster, check=True)
    poster_size = os.path.getsize(poster_out)
    
    stats.append({
        "id": sc["id"],
        "title": sc["title"],
        "orig": orig_size,
        "desktop": desktop_size,
        "mobile": mobile_size,
        "poster": poster_size
    })

print("\n" + "="*70)
print("ENCODING RESULTS SUMMARY")
print("="*70)
total_orig = sum(s["orig"] for s in stats)
total_desk = sum(s["desktop"] for s in stats)
total_mob = sum(s["mobile"] for s in stats)

for s in stats:
    print(f"{s['title']}:")
    print(f"  Original: {s['orig']/1024/1024:.2f} MB")
    print(f"  Desktop:  {s['desktop']/1024/1024:.2f} MB ({100 - (s['desktop']/s['orig']*100):.1f}% reduction)")
    print(f"  Mobile:   {s['mobile']/1024/1024:.2f} MB ({100 - (s['mobile']/s['orig']*100):.1f}% reduction)")
    print(f"  Poster:   {s['poster']/1024:.1f} KB")

print("-" * 70)
print(f"Total 4-Scene Originals: {total_orig/1024/1024:.2f} MB")
print(f"Total 4-Scene Desktop:   {total_desk/1024/1024:.2f} MB ({100 - (total_desk/total_orig*100):.1f}% reduction)")
print(f"Total 4-Scene Mobile:    {total_mob/1024/1024:.2f} MB ({100 - (total_mob/total_orig*100):.1f}% reduction)")
print("="*70)

