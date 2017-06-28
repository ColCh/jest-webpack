# jest-webpack [![Build Status](https://travis-ci.org/ColCh/jest-webpack.svg)](https://travis-ci.org/ColCh/jest-webpack) [![Test Coverage](https://codeclimate.com/github/ColCh/jest-webpack/badges/coverage.svg)](https://codeclimate.com/github/ColCh/jest-webpack)

Plugin to use [webpack](http://webpack.github.io/) with [jest](https://facebook.github.io/jest/)

## Warning

This package is a work in progress, may contain unexpected behaviour and other issues. Almost it is an experiment.

*For best experience, use not the code, but the idea.*

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
