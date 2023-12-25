const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {    
  const result = {};
  if (!domains || domains.length < 1) return result;
  const domainArr = domains.map(elt => elt.split('.').reverse()); 
  domainArr.forEach( d => {
    let dns = '';
    d.forEach(sd => {
      dns += `.${sd}`;
      result[dns] = result[dns] ? result[dns] + 1 : 1;      
    });
  });
  return result;
}

module.exports = {
  getDNSStats
};
