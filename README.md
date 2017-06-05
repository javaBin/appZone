# appZone ![build](https://travis-ci.org/javaBin/appZone.svg?branch=develop)
The official JavaZone app, written in React Native


## Enabling remote debugging on Windows

### Prerequisite
Make sure you have adb on computer (usually under C:\Users\\[Username]\AppData\Local\Android\sdk\platform-tools)
[Download platform-tools for Android, including adb](https://developer.android.com/studio/releases/platform-tools.html)
Make sure adb exists in path
[How to add adb to path in windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)

### Enabling
When emulator is running or an Android device is connected
run 'adb reverse tcp:8083 tcp:8083'
Start project using react-native run-android
Go to http://remotedev.io/local/
Open settings. Check "Use custom (local) server
Host name should be 'localhost' and port '8083'.