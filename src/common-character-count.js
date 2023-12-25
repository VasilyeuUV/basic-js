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
  const s1Obj = createObject(s1);
  const s2Obj = createObject(s2);
  const intesection = getIntersection(s1Obj, s2Obj);
  return Object.values(intesection).reduce((a, b) => a + b, 0);
}

/**
 * 
 * @param {String} s 
 * @returns {Object} key - is current char of 's', value - number of current char in the 's' 
 */
function createObject(s) {
  return [...s].reduce((acc, elt) => {
    acc[elt] = (acc[elt] || 0) + 1;
    return acc;
  }, {})
}

/**
 * 
 * @param {Object} firstObject 
 * @param {Object} secondObject 
 * @returns {Object} new Object with parameters by intersection firstObject & secondObject
 */
function getIntersection(firstObject, secondObject) {
  const newObj = {};
  for (const key in firstObject) { 
    if (key in secondObject) newObj[key] = Math.min(firstObject[key], secondObject[key]);
  } 
  return newObj;
}


module.exports = {
  getCommonCharacterCount
};
