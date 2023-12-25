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
  if (!n) return 0;
  const str = String(n);
  const result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(+str.replace(str[i], ''));    
  }
  return Math.max(...result);
}

module.exports = {
  deleteDigit
};
