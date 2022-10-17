const { NotImplementedError } = require("../extensions/index.js");

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
  let arr = String(n).split("").map(Number);
  if (arr.length === 3 && arr.indexOf(0) === -1) {
    if (+arr.slice(0, 2).join("") < +arr.slice(-2).join("")) {
      return +arr.slice(-2).join("");
    }
  }
  arr.splice(arr.indexOf(Math.min.apply(0, arr)), 1);
  return +arr.join("");
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit,
};
