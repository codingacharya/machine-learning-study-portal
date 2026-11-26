/* ML Theory ACE service worker
   - works offline after the first visit
   - always tries the network first for the page, so new deploys show up
   - change VERSION whenever you upload new files */
const VERSION = "v9";
const CACHE = "ml-theory-ace-" + VERSION;
const FILES = [
  "./", "./index.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/icon-maskable-512.png",
  "./libs/bootstrap.min.css", "./libs/bootstrap.bundle.min.js", "./libs/jquery.min.js",
  "./libs/highlight.min.js", "./libs/atom-one-dark.min.css",
  "./libs/katex/katex.min.css", "./libs/katex/katex.min.js",
  "./libs/katex/fonts/KaTeX_AMS-Regular.woff2", "./libs/katex/fonts/KaTeX_Caligraphic-Bold.woff2", "./libs/katex/fonts/KaTeX_Caligraphic-Regular.woff2", "./libs/katex/fonts/KaTeX_Fraktur-Bold.woff2", "./libs/katex/fonts/KaTeX_Fraktur-Regular.woff2", "./libs/katex/fonts/KaTeX_Main-Bold.woff2", "./libs/katex/fonts/KaTeX_Main-BoldItalic.woff2", "./libs/katex/fonts/KaTeX_Main-Italic.woff2", "./libs/katex/fonts/KaTeX_Main-Regular.woff2", "./libs/katex/fonts/KaTeX_Math-BoldItalic.woff2", "./libs/katex/fonts/KaTeX_Math-Italic.woff2", "./libs/katex/fonts/KaTeX_SansSerif-Bold.woff2", "./libs/katex/fonts/KaTeX_SansSerif-Italic.woff2", "./libs/katex/fonts/KaTeX_SansSerif-Regular.woff2", "./libs/katex/fonts/KaTeX_Script-Regular.woff2", "./libs/katex/fonts/KaTeX_Size1-Regular.woff2", "./libs/katex/fonts/KaTeX_Size2-Regular.woff2", "./libs/katex/fonts/KaTeX_Size3-Regular.woff2", "./libs/katex/fonts/KaTeX_Size4-Regular.woff2", "./libs/katex/fonts/KaTeX_Typewriter-Regular.woff2"
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;          // visitor counter etc. go straight to the network

  if (req.mode === "navigate") {                        // the page: network first, cache as fallback
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put("./index.html", copy));
        return res;
      }).catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }
  e.respondWith(                                        // files: cache first, update in background
    caches.match(req).then((hit) => {
      const net = fetch(req).then((res) => {
        if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); }
        return res;
      }).catch(() => hit);
      return hit || net;
    })
  );
});
