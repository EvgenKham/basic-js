const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let digits = [];
  let symbols = n.toString().split('');

  for (let i = 0; i < symbols.length; i += 1) {
    let digit = [];
    symbols.forEach((item, index) => {
      if (index !== i) {
        digit.push(item);
      }
    });

    digits.push(Number(digit.join('')));
  }

  return Math.max(...digits);
}

module.exports = {
  deleteDigit
};
