const { NotImplementedError } = require("../extensions/index.js");

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
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let resArray = arr.slice();
  if (resArray.indexOf("--discard-next") > -1) {
    resArray.splice(resArray.indexOf("--discard-next"), 2);
  }
  if (resArray.indexOf("--discard-prev") > -1) {
    if (
      resArray[resArray.indexOf("--discard-prev") - 1] !==
      arr[arr.indexOf("--discard-prev") - 1]
    ) {
      resArray.splice(resArray.indexOf("--discard-prev"), 1);
    } else if (resArray.indexOf("--discard-prev") === 0) {
      resArray.splice(resArray.indexOf("--discard-prev"), 1);
    } else if (resArray.indexOf("--discard-prev") === 1) {
      resArray.splice(resArray.indexOf("--discard-prev") - 1, 2);
    } else {
      resArray.splice(resArray.indexOf("--discard-prev") - 1, 2);
    }
  }
  if (resArray.indexOf("--double-next") > -1) {
    if (
      resArray[resArray.indexOf("--double-next") + 1] !==
      arr[arr.indexOf("--double-next") + 1]
    ) {
      resArray.splice(
        resArray.indexOf("--double-next"),
        1,
        arr[arr.indexOf("--double-next") + 1]
      );
    } else if (resArray.indexOf("--double-next") >= resArray.length - 1) {
      resArray.splice(resArray.indexOf("--double-next"), 1);
    } else {
      resArray.splice(
        resArray.indexOf("--double-next"),
        1,
        resArray[resArray.indexOf("--double-next") + 1]
      );
    }
  }
  if (resArray.indexOf("--double-prev") > -1) {
    if (
      resArray[resArray.indexOf("--double-prev") - 1] !==
      arr[arr.indexOf("--double-prev") - 1]
    ) {
      resArray.splice(resArray.indexOf("--double-prev"), 1);
    } else if (resArray.indexOf("--double-prev") === 0) {
      resArray.splice(resArray.indexOf("--double-prev"), 1);
    } else {
      resArray.splice(
        resArray.indexOf("--double-prev"),
        1,
        resArray[resArray.indexOf("--double-prev") - 1]
      );
    }
  }
  return resArray;

  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  transform,
};
