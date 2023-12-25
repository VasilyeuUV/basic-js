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
  if (!matrix || matrix.length < 1) return 0;
  const cat = '^^';
  return matrix.reduce((acc, elt) => 
    [...acc.filter(val => val === cat), ...elt.filter(val => val === cat)]).length;
}

module.exports = {
  countCats
};
