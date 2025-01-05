const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

    let temp = [...arr];
    let del = false;

    for (let index = 0; index < temp.length; index += 1) {

      if (temp[index] === "--discard-next") {
        del = true;
        temp.splice(index, 2);
      }

      if (temp[index] === "--discard-prev") {
        if(index > 0 && !del) {
          temp.splice(index - 1, 2);
        } else {
          temp.splice(index, 1);
        }
      }


      if (temp[index] === "--double-next") {
        if (temp[index + 1]) {
          temp.splice(index, 1, temp[index + 1]);
        } else {
          temp.splice(index, 1);
        }
      }


      if (temp[index] === "--double-prev") {
        if (index > 0 && !del) {
          temp.splice(index, 1, temp[index - 1]);
        } else {
          temp.splice(index, 1);
        }
      }

    };

  return temp;
}

module.exports = {
  transform
};
