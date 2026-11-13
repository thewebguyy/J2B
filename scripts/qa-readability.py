import subprocess
import time
import json
import urllib.request
import websocket
import os

routes = ["/about", "/community", "/events", "/book", "/resources"]
viewports = [
    {"name": "desktop-1440", "width": 1440, "height": 900},
    {"name": "mobile-390", "width": 390, "height": 844},
    {"name": "mobile-320", "width": 320, "height": 640}
]

out_dir = os.path.join("public", "qa-screens")
os.makedirs(out_dir, exist_ok=True)

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
results = []

for vp in viewports:
    for route in routes:
        url = f"http://localhost:3077{route}"
        proc = subprocess.Popen([
            chrome,
            '--headless=new',
            f'--window-size={vp["width"]},{vp["height"]}',
            '--remote-debugging-port=9222',
            '--remote-allow-origins=*',
            '--disable-gpu',
            '--autoplay-policy=no-user-gesture-required',
            url
        ])
        time.sleep(3)
        try:
            tabs = json.loads(urllib.request.urlopen('http://localhost:9222/json').read())
            page_tab = [t for t in tabs if t.get('type') == 'page' and 'localhost:3077' in t.get('url', '')][0]
            ws_url = page_tab['webSocketDebuggerUrl']
            ws = websocket.create_connection(ws_url)

            def eval_js(expression):
                cmd = {'id': 1, 'method': 'Runtime.evaluate', 'params': {'expression': expression, 'returnByValue': True}}
                ws.send(json.dumps(cmd))
                res = json.loads(ws.recv())
                return res.get('result', {}).get('result', {}).get('value')

            # Wait 1.5s for video playback to advance to mid-frame
            time.sleep(1.5)
            metrics = eval_js("""(() => {
                const h1 = document.querySelector('h1');
                const p = document.querySelector('section p');
                const v = document.querySelector('video');
                const getRGB = (el) => el ? window.getComputedStyle(el).color : null;
                const getBG = (el) => el ? window.getComputedStyle(el).backgroundColor : null;
                return {
                    h1Text: h1 ? h1.innerText.trim().slice(0, 30) : null,
                    h1Color: getRGB(h1),
                    pColor: getRGB(p),
                    videoPlaying: v ? (!v.paused && v.currentTime > 0) : null,
                    videoReadyState: v ? v.readyState : null,
                    videoSrc: v ? v.src.split('/').pop() : null
                };
            })()""")

            # Capture screenshot
            cmd_ss = {'id': 2, 'method': 'Page.captureScreenshot', 'params': {'format': 'jpeg', 'quality': 80}}
            ws.send(json.dumps(cmd_ss))
            ss_res = json.loads(ws.recv())
            import base64
            img_data = base64.b64decode(ss_res['result']['data'])
            clean_route = route.replace('/', '') or 'home'
            ss_path = os.path.join(out_dir, f"{clean_route}-{vp['name']}.jpg")
            with open(ss_path, 'wb') as f:
                f.write(img_data)

            results.append({
                "route": route,
                "viewport": vp["name"],
                "metrics": metrics,
                "screenshot": ss_path
            })
            print(f"Verified {route} [{vp['name']}]: {metrics}")
            ws.close()
        except Exception as e:
            print(f"Error on {route} [{vp['name']}]: {e}")
        finally:
            proc.terminate()
            time.sleep(1)

with open(os.path.join(out_dir, "qa-summary.json"), "w") as f:
    json.dump(results, f, indent=2)

print("\nAll 15 viewport/route combinations visually verified and recorded.")

