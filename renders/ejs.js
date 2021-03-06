const fs = require('fs');
const ejs = require('ejs');
const { promisify } = require('util');

const readFile = promisify(fs.readFile);

module.exports = {
  extension: 'ejs',
  renderer: async (filename, options = {}) => {
    const { encoding = 'utf8' } = options;
    const str = await readFile(filename, encoding);
    return ejs.compile(str, options);
  }
};