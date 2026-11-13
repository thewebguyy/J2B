import subprocess
import time
import json
import urllib.request
import websocket

chrome = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
proc = subprocess.Popen([
    chrome,
    '--headless=new',
    '--remote-debugging-port=9222',
    '--remote-allow-origins=*',
    '--disable-gpu',
    '--autoplay-policy=no-user-gesture-required',
    'http://localhost:3088/'
])

time.sleep(3)

try:
    tabs = json.loads(urllib.request.urlopen('http://localhost:9222/json').read())
    page_tab = [t for t in tabs if t.get('type') == 'page' and 'localhost:3088' in t.get('url', '')][0]
    ws_url = page_tab['webSocketDebuggerUrl']
    ws = websocket.create_connection(ws_url)

    def send_cdp(method, params=None):
        cmd = {'id': 1, 'method': method, 'params': params or {}}
        ws.send(json.dumps(cmd))
        return json.loads(ws.recv())

    def eval_js(expression):
        cmd = {'id': 2, 'method': 'Runtime.evaluate', 'params': {'expression': expression, 'returnByValue': True}}
        ws.send(json.dumps(cmd))
        res = json.loads(ws.recv())
        return res.get('result', {}).get('result', {}).get('value')

    print("Initial connection established.")
    
    # 1. Query videos
    video_count = eval_js("document.querySelectorAll('video').length")
    print("Videos count in DOM:", video_count)

    # 2. Check readyState & currentTime progression across 10 seconds
    for i in range(5):
        time.sleep(2)
        status = eval_js("""(() => {
            const vids = Array.from(document.querySelectorAll('video')).map((v, idx) => ({
                idx,
                src: v.src,
                paused: v.paused,
                currentTime: v.currentTime,
                duration: v.duration,
                readyState: v.readyState,
                opacity: window.getComputedStyle(v).opacity
            }));
            const button = document.querySelector('button[aria-label*="film"]')?.getAttribute('aria-label');
            return { vids, button };
        })()""")
        print(f"Tick {i*2 + 2}s:", json.dumps(status))

    # 3. Test Play/Pause toggle button
    print("\nTesting user Play/Pause button interaction...")
    eval_js("document.querySelector('button[aria-label*=\"film\"]').click()")
    time.sleep(1)
    status_paused = eval_js("""(() => {
        const v = document.querySelector('video');
        return { paused: v ? v.paused : null, label: document.querySelector('button[aria-label*=\"film\"]')?.getAttribute('aria-label') };
    })()""")
    print("After click 1 (Pause):", status_paused)

    eval_js("document.querySelector('button[aria-label*=\"film\"]').click()")
    time.sleep(1)
    status_resumed = eval_js("""(() => {
        const v = document.querySelector('video');
        return { paused: v ? v.paused : null, label: document.querySelector('button[aria-label*=\"film\"]')?.getAttribute('aria-label') };
    })()""")
    print("After click 2 (Resume):", status_resumed)

    # 4. Check for console errors
    logs = eval_js("window.errors || []")
    print("Console errors logged:", logs)

finally:
    proc.terminate()
