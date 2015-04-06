// this is config for webpack jest preprocessor
module.exports = {
  module: {
    loaders: [
      { test: /\.coffee$/, loader: "coffee-loader" },
      { test: /\.(coffee\.md|litcoffee)$/, loader: "coffee-loader?literate" }
    ]
  }
};
