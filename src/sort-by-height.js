const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortedArray = [];
  let resArray = arr.map((el) => {
    if (el !== -1) {
      sortedArray.push(el);
      el = " ";
    }
    return el;
  });
  sortedArray.sort((a, b) => a - b);
  return resArray.map((x) => {
    if (x === " ") {
      return (x = sortedArray.shift());
    }
    return x;
  });
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight,
};
