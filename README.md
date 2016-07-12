Basic React.js environment with ES6, Babel, and webpack-dev-server
==========================


run these command to get it working and visit localhost://8080
```
$ npm i
$ npm run build
$ webpack-dev-server
```
Basic UI Wireframe looks strikingly similar to Google Maps except I will implement a diffenent MUI theme
![Design: Basic UI Layout](./ui-wireframe.png)


package.json file
```
{
  "name": "react-template-starter-basic",
  "version": "1.0.0",
  "description": "",
  "main": "js/index.jsx",
  "scripts": {
    "mkdir": "mkdir -p build",
    "build": "npm run clean && npm run mkdir && npm run build:html && npm run build:css && npm run build:js",
    "watch": "npm run watch:html & npm run watch:css & npm run watch:js",
    "clean": "rm -rf build",
    "build:html": "npm run clean:html && cp index.html build/",
    "watch:html": "npm run build:html && chokidar index.html -c 'npm run build:html'",
    "clean:html": "rm -f build/index.html",
    "build:css": "npm run clean:css && cp style.css build/",
    "watch:css": "npm run build:css && chokidar style.css -c 'npm run build:css'",
    "clean:css": "rm -f build/style.css",
    "build:js": "npm run clean:js && webpack",
    "watch:js": "npm run build:js && webpack --watch",
    "clean:js": "rm -f build/$npm_package_name.$npm_package_version.js build/$npm_package_name.$npm_package_version.js.map"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.9.1",
    "babel-loader": "^6.2.4",
    "babel-preset-es2015": "^6.9.0",
    "babel-preset-react": "^6.5.0",
    "webpack": "^1.13.1"
  },
  "dependencies": {
    "material-ui": "^0.15.2",
    "react": "^15.2.1",
    "react-dom": "^15.2.1",
    "react-tap-event-plugin": "^1.0.0"
  }
}

```
