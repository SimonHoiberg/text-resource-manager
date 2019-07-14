# Text Resource Manager
![NPM Version](https://img.shields.io/npm/v/text-resource-manager.svg)
[![Github License](https://img.shields.io/github/license/Silind/text-resource-manager.svg)](https://github.com/Silind/Hue-Debugger-UI/blob/master/LICENSE)
[![Build Status](https://travis-ci.com/Silind/text-resource-manager.svg?branch=master)](https://travis-ci.com/Silind/Hue-Debugger-UI)
![Code Coverage](https://img.shields.io/codecov/c/github/Silind/text-resource-manager.svg)

#### A lightweight text manager for managing texts from a localized json file

## Table of content

- [How it works](#how-it-works)
- [**Getting Started**](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Get Help](#get-help)
- [Acknowledgments](#acknowledgments)

## How it works
With **Text Resource Manager** you can benefit from having all texts in your application localized in one single json file.  
Easy to maintain, and easy to swap at runtime for multiple language support.

When used with TypeScript, you get suggestions and hints on-the-fly, so finding the correct text will feel smooth and strainless.

### Preview
![example](https://silind-s3.s3.eu-west-2.amazonaws.com/icons-and-misc/trm1.gif)

The structure of the json file can be however you want it. Flat, deeply nested or somewhere in between.   
The only constraint is that the **json file must contain only values of _string_ and _object_**

#### Example
A json file containing texts could look like this:
```json
{
 "buttons": {
   "done": "Done, go to next",
   "exit": "Go back"
 },
 "landingPage": {
   "header": "Text Resource Manager",
   "subHeader": "Sleek little text manager",
   "welcomeMsg": "Hello, $1",
   "menu": {
     "home": "Home",
     "users": "All Users",
     "logout": "Log out",
     "subMenu": {
       "saveAndLogout": "Save and Log Out",
       "logoutAndQuit": "Log Out without saving"
     }
   }
 },
 "copyright": "All rights reserved"
}
```

## Getting Started
### Install
Install **Text Resource Manager** using npm or yarn 

**npm**:
```console
npm install text-resource-manager
```
**yarn**:
```console
yarn add text-resource-manager
```

### Use in project
Import in your project, and pass in a reference to your json file
```js
import TextResourceManager from 'text-resource-manager';
import strings from './strings.json';

const { text } = new TextResourceManager(strings);

/* Get your strings by using dot notation */
const headerText = text.buttons.done; // Done, go to next
```

### Setup linter
To use suggestions and hints, you need to watch the json file for changes

In your package.json, create two new `scripts`
```json
...
"scripts": {
   "trm-hint": "node node_modules/text-resource-manager/dist/ -file <json-file-path>",
   "trm-hint:watch": "node node_modules/text-resource-manager/dist/ -file <json-file-path> -watch"
 },
...
```

`trm-hint` performs a single run-through of your json file, and creates a corrosponding TypeScript interface.

`trm-hint:watch` watches your json file for changes, and creates a new TypeScript interface every time a change is detected.

*NB: If you are using VSCode, sometimes you will have to reload your window in order to use the updated interface.*

### Use with React
You can then use this script in extension with `npm start`  

A full example of the scripts in a React App could look like this
#### Example
```json
"scripts": {
   "start": "react-scripts start & npm run trm-hint:watch",
   "build": "react-scripts build",
   "test": "react-scripts test",
   "eject": "react-scripts eject",
   "trm-hint": "node node_modules/text-resource-manager/dist/ -file src/strings.json",
   "trm-hint:watch": "node node_modules/text-resource-manager/dist/ -file src/strings.json -watch"
 },
```

## Contributing

#### Issues
In the case of a bug report, bugfix or a suggestions, please feel very free to open an issue.

#### Pull request
Pull requests are always welcome, and I'll do my best to do reviews as fast as I can.

## License

This project is licensed under the [MIT License](https://github.com/Silind/text-resource-manager/blob/master/LICENSE)

## Get Help
- Contact me on silindsoftwaredk@gmail.com
- If appropriate, [open an issue](https://github.com/Silind/text-resource-manager/issues) on GitHub

## Acknowledgments
- [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript) - Very useful tool for creating TypeScript interfaces from json schemas :thumbsup:

