var fs = require('fs');
var path = require('path');
var vm = require('vm');

var preproc = require('..');

var fixturesPath = path.resolve(__dirname, 'fixtures/');

describe('basic jest preproc', function () {
  it('should export `process` property', function () {
    preproc.process.should.be.a.Function;
  });

  it('should preprocess regular file', function () {
    var filepath = path.resolve(fixturesPath, 'hello.js');
    var code = preproc.process(fs.readFileSync(filepath), filepath);
    var sandbox = { module: {} };
    vm.runInNewContext(code, sandbox);
    sandbox.module.exports.should.be.equal("Hello, World!");
  });
});
