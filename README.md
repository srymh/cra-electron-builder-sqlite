This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

**This project needs Yarn to run scripts.**

## Installing sqlite3

**Check here for details. [sqlite3 \- npm](https://www.npmjs.com/package/sqlite3#custom-builds-and-electron)**

For Windows:

1. You need "Visual Studio C++ Build Tools" and "Python 2".
   - or use [felixrieseberg/windows\-build\-tools: Install C\+\+ Build Tools for Windows using npm](https://github.com/felixrieseberg/windows-build-tools)
2. Install node-gyp
   - `npm install -g node-gyp` or `yarn global add node-gyp`
3. To install sqlite3, run a batch file:
    ``` bat
    @echo off
    setlocal
    set npm_config_build-from-source=true
    set npm_config_save=true
    set npm_config_runtime=electron
    REM specify Electron version
    set npm_config_target=8.2.0
    set npm_config_dist-url=https://atom.io/download/electron
    yarn add sqlite3
    endlocal

    REM This script is the same as:
    REM npm install sqlite3 --build-from-source --runtime=electron --target=8.2.0 --dist-url=https://atom.io/download/electron
    ```
    reference: [node\.js \- Does yarn add package \-\-build\-from\-source behave like npm install package \-\-build\-from\-source when passing node\-gyp flags to packages? \- Stack Overflow](https://stackoverflow.com/questions/45758461/does-yarn-add-package-build-from-source-behave-like-npm-install-package-buil)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `yarn electron:dev`

debug

#### Prevents `electron:dev` script from opening browser

For Windows users  
Adds an `.env.development.local` file that has content:
```
BROWSER=none
```

For others  
Modifies `electron:dev` script:
```
"electron:dev": "concurrently \"BROWSER=none yarn start\" \"wait-on http://localhost:3000 && tsc -p electron -w\" \"wait-on http://localhost:3000 && tsc -p electron && electron .\"",
```

### `yarn electron:build`

build for release

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
