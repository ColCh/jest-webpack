# jest-webpack [![Build Status](https://travis-ci.org/ColCh/jest-webpack.svg)](https://travis-ci.org/ColCh/jest-webpack) [![Test Coverage](https://codeclimate.com/github/ColCh/jest-webpack/badges/coverage.svg)](https://codeclimate.com/github/ColCh/jest-webpack)

Plugin to use [webpack](http://webpack.github.io/) with [jest](https://facebook.github.io/jest/)

## Warning

This package is deprecated.

Please use https://github.com/mzgoddard/jest-webpack

More info: https://github.com/ColCh/jest-webpack/issues/6

## Usage

See [test/fixtures/jest_tests](test/fixtures/jest_tests) dir for example. 

Update `package.json` with `jest.scriptPreprocessor`:

```json
{
  "jest": {
    "scriptPreprocessor": "<rootDir>/node_modules/jest-webpack"
  }
}
```

Use `jest-webpack-config` option to point webpack config path:

```json
{
  "jest-webpack-config": "jest-webpack.config.js"
}
```
