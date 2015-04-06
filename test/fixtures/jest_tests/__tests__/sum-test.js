// __tests__/sum-test.js
jest.dontMock('../sum.js');
jest.dontMock('../sum.coffee');

describe('sum', function () {
  describe('js', function() {
   it('adds 1 + 2 to equal 3', function() {
     var sum = require('../sum.js');
     expect(sum(1, 2)).toBe(3);
   });
  });

  describe('coffee', function() {
    it('adds 1 + 2 to equal 3', function() {
      var sum = require('../sum.coffee');
      expect(sum(1, 2)).toBe(3);
    });
  });
});
