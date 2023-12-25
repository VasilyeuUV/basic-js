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
  const output = matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  let sum = 0;
  for (let i = 0; i < output.length; i++) {
    const row = output[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) break;
      sum += row[j];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
