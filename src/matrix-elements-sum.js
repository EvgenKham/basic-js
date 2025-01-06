const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  matrix.forEach((arr, indexArr) => {
    arr.forEach((item, indexEl) => {
      if (indexArr > 0) {
        if (matrix[indexArr - 1][indexEl] !== 0) {
          sum += item;
        }
        
      } else {
        sum += item;
      }
    })
  })

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
