# appZone ![build](https://travis-ci.org/javaBin/appZone.svg?branch=develop)
The official JavaZone app, written in React Native


## Start the application 

> npm install

Start the emulator:
- Ios
> react-native run-ios
- Android
> react-native run-android

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

## Build a signed apk for Android

Follow the steps described [here](https://facebook.github.io/react-native/docs/signed-apk-android.html#generating-the-release-apk) to build a signed apk.
