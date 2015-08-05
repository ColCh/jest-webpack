var fs = require('fs');
var path = require('path');
var vm = require('vm');
var jest = require('jest-cli');

var preproc = require('..');

var fixturesPath = path.resolve(__dirname, 'fixtures/');
var testsRoot = path.resolve(fixturesPath, 'require.context/');

describe('basic jest run', function () {
  it('should succeed', function (done) {
    jest.runCLI({runInBand: true}, testsRoot, function (success) {
      success.should.be.True;
      done();
    });
  });
});
