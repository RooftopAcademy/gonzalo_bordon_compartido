const path = require('path');

module.exports = {
  entry: './build/client/main.js',
  output: {
    path: path.resolve(__dirname, 'public', 'js'),
    filename: 'app.min.js',
  },
};