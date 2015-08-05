// sum.js

// require context relatively to "modules dir"
var req = require.context("./modules");

// notice the path
var sum = req('./sum.coffee');

module.exports = sum;
