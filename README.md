# jest-webpack

Plugin to use [webpack](http://webpack.github.io/) with [jest](https://facebook.github.io/jest/)

## Installation

```sh
$ npm install --save-dev jest-webpack
```

## Usage

Update `package.json` with `jest.scriptPreprocessor`:

```json
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/jest-webpack"
  }
}
```
