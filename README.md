# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Install dependent libraries in the project's main directory

prefer to use yarn. go to project terminal and install the dependencies.
```bash
# using npm
npm install

# OR using Yarn
yarn 
```


## Step 2: Install pods for IOS

go to ios folder and install the pods to run the application nin ios.
```bash
# using command in therminal or cmd
cd ios && pod install && cd ..
```


## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Implementation

This code has used some usefull libraries in this.

1. styled-components for **styling** 
2. formik for using forms 
3. yup for validation of filds.
4. react-navigation for handling the navigation of screens. 
5. axios to call the endpoints. 

## Architecture pattern:
every screen will have base folder/directory in which we will have 4 files
1. index.ts  it will export everything from this folder. mostly the jsx file will be exported from this. 
2. tsx file of the screen in wich all the UI related code is present. 
3. styles file will have all the syling. this code is using styled-component to make the code look easier to read. 
4. useHook: file is used to catter all the js realted functionalities. 

### What's missing. 
1. Did not have the access to figma so not able to get the svgs of logo etc. 
2. did not implement path alias for now as it was just introductory code.
3. husky pre-commit implementation for lint checking before pushing to git. 
4. svg implementation is not there as it was an introductory code review. 
5. app icons becuse design is not accessible. 

