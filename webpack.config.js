const path = require('path');

module.exports = {
  entry: './srcipts/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};