# jest-webpack [![Build Status](https://travis-ci.org/ColCh/jest-webpack.svg)](https://travis-ci.org/ColCh/jest-webpack)

Plugin to use [webpack](http://webpack.github.io/) with [jest](https://facebook.github.io/jest/)

## Warning

This package is a work in progress, may contain unexpected behaviour and other issues. Almost it is an experiment.

*For best experience, use not the code, but the idea.*

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
