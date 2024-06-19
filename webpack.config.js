const path = require('path');

module.exports = {
  // Other configurations...
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@config': path.resolve(__dirname, 'src/config')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  // Other configurations...
};
