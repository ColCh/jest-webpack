'use strict';

// Using 'lib/webpack.web.js'
var webpackPackageJson = require('webpack/package.json');
var webpack = require('webpack/' + webpackPackageJson.web);

var MemoryFileSystem = require('memory-fs');

var EnhancedResolve = require('enhanced-resolve');
var SyncNodeJsInputFileSystem = EnhancedResolve.SyncNodeJsInputFileSystem;

// Store FS among preprocess calls
var memoryFs = new MemoryFileSystem();
var syncFs = new SyncNodeJsInputFileSystem();

module.exports = {
  process: function (src, filename) {
    if (filename.indexOf('__tests__') !== -1) {
        return src;
    }

    var options = {
        entry: filename,
        target: 'node',
        output: {
            path: '/',
            libraryTarget: 'commonjs2',
            filename: filename
        }
    };

    options.outputFileSystem = memoryFs;
    options.inputFileSystem = syncFs;

    webpack(options).run();

    var content = '' + memoryFs.readFileSync(filename);

    memoryFs.unlinkSync(filename);

    return content;
  }
};
