import { resolve } from 'path';

module.exports = {
  build: {
    lib: {
      entry: resolve(__dirname, 'lib', 'tare.js'),
      name: 'Tare',
      fileName: (format) => `tare.${format}.js`
    },
  }
};
