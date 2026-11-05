ML THEORY ACE — MOBILE DOWNLOAD PACKAGE

BEHAVIOR
- Android phones: Download App checks for and downloads ./downloads/ML-Theory-ACE.apk.
- iPhone/iPad: button explains the Safari Add to Home Screen steps. iOS does not
  support installing Android APK files from a website.
- Desktop: the Download App button is hidden; no desktop installation prompt
  or instruction is shown.

IMPORTANT: THE APK IS NOT INCLUDED
This ZIP contains Android Studio source code, not a compiled APK. The Android
button will only download after you build the APK and upload it to the HTTPS
website at exactly: downloads/ML-Theory-ACE.apk

BUILD THE APK
1. Install Android Studio, Android SDK Platform 35, and JDK 17.
2. Open android-app/ in Android Studio and allow Gradle sync.
3. Choose Build > Build Bundle(s) / APK(s) > Build APK(s).
4. Find the debug APK at android-app/app/build/outputs/apk/debug/.
5. Rename it ML-Theory-ACE.apk and place it in downloads/.
6. Deploy the website files and downloads/ML-Theory-ACE.apk to your HTTPS host.

Android users may see a browser/security confirmation and must approve
installation themselves. For public release, sign the APK with your own
release keystore; do not distribute a debug APK as a production release.
