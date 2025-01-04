const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let chars = str.split('');
  let count = 1;

  for (let i = 0; i < chars.length; i += 1) {

    if (chars[i] === chars[i + 1]) {
      count += 1;

    } else {
      if (count === 1) {
        result += chars[i];

      } else {
        result += `${count}${chars[i]}`;
        count = 1;
      }
    }

  }

  return result;
}

module.exports = {
  encodeLine
};
