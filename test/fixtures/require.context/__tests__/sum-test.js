// __tests__/sum-test.js
jest.dontMock('../sum.js');

describe('sum', function () {
 it('adds 1 + 2 to equal 3', function() {
   var sum = require('../sum.js');
   expect(sum(1, 2)).toBe(3);
 });
});
