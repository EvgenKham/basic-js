const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let countCats = 0;
  const ears = '^^';

  matrix.forEach(arr => arr.forEach(item => {
    if (item === ears) {
      countCats += 1;
    }
  }));

  // for (let i = 0; i < matrix.length; i += 1) {
  //   if (Array.isArray(matrix[i])) {
  //     for (let j = 0; j < matrix[i].length; j += 1) {
  //       if (matrix[i][j] === ears) {
  //         countCats += 1;
  //       }
  //     }
  //   } else {
  //     if (matrix[i] === ears) {
  //       countCats += 1;
  //     }
  //   }
  // }

  return countCats;
}

module.exports = {
  countCats
};
