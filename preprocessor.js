'use strict';

var webpack = require('webpack');
var MemoryFileSystem = require('memory-fs');

var fs = new MemoryFileSystem();

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

    var compiler = webpack(options);

    compiler.outputFileSystem = fs;

    var stats = null;

    compiler.run(function () {
        stats = true;
    });

    while (stats === null) {
        require('deasync').sleep(100);
    }

    var contentBuffer = fs.readFileSync(filename);
    var content = contentBuffer + '';

    fs.unlinkSync(filename);

    return content;
  }
};
