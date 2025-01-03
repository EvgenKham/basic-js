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

  for (let i = 0; i < domains.length; i += 1) {
    const arr = domains[i].split('.').reverse();

    let curDomain = '';
    let count = 0;

    for (let j = 0; j < arr.length; j += 1) {
      if (curDomain) {
        count += 1;
      }
      curDomain += `.${arr[j]}`;
      result[curDomain] = (result[curDomain] || 0) + 1;
    }
  }

  return result;
}

module.exports = {
  getDNSStats
};
