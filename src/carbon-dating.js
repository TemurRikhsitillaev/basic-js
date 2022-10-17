const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!Number.isFinite(+sampleActivity) || typeof sampleActivity !== "string") {
    return false;
  } else if (+sampleActivity > 15 || 15 / sampleActivity === Infinity) {
    return false;
  } else if (+sampleActivity <= 0) {
    return false;
  }
  return Math.ceil((Math.log(15 / sampleActivity) * 5730) / 0.693);

  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  dateSample,
};
