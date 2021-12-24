import { resolve } from 'path';

module.exports = {
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'Tare',
      fileName: (format) => `tare.${format}.js`
    },
  }
};
