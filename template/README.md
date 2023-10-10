# Getting Started

**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup)

## Installed Packages
- [react-native-config](https://github.com/luggit/react-native-config)
- [react-navigation/native](https://reactnavigation.org/docs/native-stack-navigator)
- [react-navigation/native-stack](https://reactnavigation.org/docs/stack-navigator)
- [react-native-mmkv](https://github.com/mrousavy/react-native-mmkv)
- [react-redux](https://react-redux.js.org/introduction/getting-started)
- [reduxjs/toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [axios](https://axios-http.com/docs/intro)
- [patch-package](https://github.com/ds300/patch-package)
- [react-native-svg](https://github.com/software-mansion/react-native-svg)
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
- [react-native-firebase/app](https://rnfirebase.io/)

## Setup Environments
The template consist of two environment `staging` and `production`

To run `staging` just use `yarn android` or `yarn ios`
and to run `production` use `yarn android:prod` or `yarn ios:prod`

Create the environment variables files in root directory `.env.staging` and `.env.production`

Also for fastlane environment create fastlane enviromnent variables `.env.fastlane.staging` and `.env.fastlane.production` in root directory

## Setup App Signing

### iOS
Since Automatically manage app signing is disable you need to create provision profile manually and add to `/ios` and link from xcode. Try to keep file name for Provision Profile `projectnameStaging.mobileprovision` and `projectnameProduction.mobileprovision` else please update these provision name in `fastlane` `workflow` as well

### Android
Create `keystore` file for each flavor used in Android as `staging-release.keystore` and `production-keystore.keystore` and add these to `/android/app`


Also create `properties` file containing each keystore information required for respective keystore file `keystore.staging.propeprties` and `keystore.production.properties` and add these files in `/android/`

```bash 
KEYSTORE_FILE       = 
KEYSTORE_PASSWORD   = 
KEY_ALIAS           = 
KEY_PASSWORD        = 
PACKAGE_NAME        = 
```

## Setup Firebase

### Android
Add respective `google-services.json` file for respective flavor in its respective directory

For `staging` add `google-services.json` in `/android/src/staging/`

For `production` add `google-services.json` in `/android/src/production/`

### iOS
Add respective `GoogleService-Info.plist` file for respective scheme in its respective directory

For `staging` add `GoogleService-Info.plist` in `ios/Firebase/staging/`

For `production` add `GoogleService-Info.plist` in `ios/Firebase/production/`

## Project Structure
