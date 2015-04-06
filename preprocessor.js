'use strict';

var pkginfo = require('pkginfo');
var path = require('path');

// package.json key for webpack config
var JEST_WEBPACK_PKGCONFIG_KEY = 'jest-webpack-config';

// Using 'lib/webpack.web.js'
var webpackPackageJson = require('webpack/package.json');
var webpack = require('webpack/' + webpackPackageJson.web);

var MemoryFileSystem = require('memory-fs');

var EnhancedResolve = require('enhanced-resolve');
var SyncNodeJsInputFileSystem = EnhancedResolve.SyncNodeJsInputFileSystem;

// Store FS among preprocess calls
var memoryFs = new MemoryFileSystem();
var syncFs = new SyncNodeJsInputFileSystem();

// Will try load config for webpack
var retvieveWebpackConfig = function (filename) {
  var jestWebpackCfg = {};

  try {
    var pkgrelpath = pkginfo.find(filename);
    var filedir = path.dirname(filename);

    var pkgpath = path.join(filedir, pkgrelpath);
    var pkgdirname = path.dirname(pkgpath);
    var pkg = require(pkgpath);

    var jestWebpackConfigRelPath = pkg[JEST_WEBPACK_PKGCONFIG_KEY];
    var jestWebpackConfigPath = path.join(pkgdirname, jestWebpackConfigRelPath);

    jestWebpackCfg = require(jestWebpackConfigPath);
  } catch (e) {
    // probably not found. We can ignore it silently
  }

  return jestWebpackCfg;
};

module.exports = {
  process: function (src, filename) {
    if (filename.indexOf('__tests__') !== -1) {
        return src;
    }

    var options = retvieveWebpackConfig(filename);

    options.entry = filename;
    options.target = 'node';
    options.output = options.output || {};
    options.output.path = '/';
    options.output.libraryTarget = 'commonjs2';
    options.output.filename = filename;

    options.outputFileSystem = memoryFs;
    options.inputFileSystem = syncFs;

    webpack(options).run();

    var content = '' + memoryFs.readFileSync(filename);

    memoryFs.unlinkSync(filename);

    return content;
  }
};
