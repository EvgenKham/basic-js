const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  let count = 0;

  for (let x = 0; x < arr1.length; x += 1) {
    let symbol1 = arr1[x];

    for (let y = 0; y < arr2.length; y += 1) {
      let symbol2 = arr2[y];
      if (symbol1 === symbol2) {
        count += 1;
        arr2.splice(y, 1);
        break;
      }
    }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
