ML THEORY ACE - mobile app package
==================================
Upload EVERYTHING in this folder to the ROOT of your Vercel (or Netlify) project:

  index.html              the app
  manifest.webmanifest    app name + icons
  sw.js                   offline support
  vercel.json             correct headers for Vercel
  icons/                  app icons
  libs/                   Bootstrap, jQuery, highlight.js, KaTeX maths (so the app works offline)

INSTALL ON A PHONE
  Android (Chrome): open your site -> tap the yellow "Install App" button
                    (or menu -> Install app / Add to Home screen).
  iPhone (Safari):  open your site -> Share -> Add to Home Screen.
  Do not open the link inside WhatsApp / Instagram / Telegram - open it in Chrome or Safari.

UPDATING LATER
  Replace the files, and change  const VERSION = "v9"  in sw.js to "v8" (any new value),
  so phones pick up the new version.

REAL APK (optional)
  Go to pwabuilder.com, enter your site link, choose Android, download the package.

LEARNING PATH (new)
  Every topic now follows: Theory > Math > Derivation > Algorithm > Code > Visualize > Quiz > Apply.
  Progress is saved on the device (localStorage). Add content in index.html:
    DERIV["Topic title"]  = [["explanation","LaTeX"], ...]     (derivation steps)
    ALGO["Topic title"]   = ["pseudocode line", ...]           (algorithm)
    QUIZ["Topic title"]   = [["question","correct","wrong","wrong","wrong","explanation"], ...]
    VIZMAP["Topic title"] = "gd" | "sig" | "norm" | "km" | "knn" | "poly" | "roc" | "perc"
