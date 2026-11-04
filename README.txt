# ML Theory ACE – Installable Web App

## Files
- `index.html` – the complete ML Theory ACE website
- `manifest.webmanifest` – app name, icon and install settings
- `sw.js` – service worker for app-shell/offline caching
- `icons/` – install icons

## Deploy and install
1. Upload the complete contents of this folder to the same directory on an HTTPS web host (for example, your existing Vercel project).
2. Make sure `index.html`, `manifest.webmanifest`, `sw.js`, and the `icons` folder are all deployed together.
3. Open the HTTPS website in Chrome/Edge on Android or desktop.
4. Tap **Download App** in the website. If the browser does not show an install prompt, use its menu and choose **Install app** or **Add to Home screen**.
5. On iPhone, open the site in Safari → Share → Add to Home Screen.

This package creates an installable PWA, not a native Android APK. A native APK requires a separate Android wrapper/build and signing process.

## Visitor counter
The footer uses CounterAPI's public page-view endpoint. It counts one visit per browser tab session and uses the deployed hostname as the counter namespace. The counter requires internet access. If the API is unavailable or blocked, the footer displays “Unavailable” instead of inventing a count.
