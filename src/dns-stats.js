const { NotImplementedError } = require("../extensions/index.js");

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
  let newDomains = domains.map((el) => el.split(".").reverse());
  let array = [];
  for (let i = 0; i < newDomains.length; i++) {
    let str = "";
    for (let j = 0; j < newDomains[i].length; j++) {
      if (newDomains[i][j]) {
        str += "." + newDomains[i][j];
        array.push(str);
      }
    }
  }
  let res = array.reduce((acc, item) => {
    acc[item] = (acc[item] || 0) + 1;
    return acc;
  }, {});
  return res;
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats,
};
