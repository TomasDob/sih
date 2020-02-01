# SIH Score

SIH Score

## Android

```sh
yarn build
npx cap copy
npx cap copy android
npx cap open android
```

Opens Android Studio from where one can build release package for Google Play.

## iOS

```sh
yarn build
npx cap copy
npx cap copy ios
npx cap open ios
cd ios && pod install && cd ..
```

Opens Xcode from where one can release app to App Store.
