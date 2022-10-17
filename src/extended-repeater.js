const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let a = "";
  const objArray = options;
  const Methods = {
    repeatTimes() {
      let value = objArray.repeatTimes;
      if (value === undefined) (a += str), this.addition();
      for (let i = 1; i <= value; i++) {
        if (!Number.isInteger(value)) {
        } else a += `${str}`;
        this.addition();
        i < value ? this.separator() : "";
      }
      return a;
    },
    addition() {
      let value = objArray.addition;
      if (objArray.additionRepeatTimes === undefined)
        a += `${value === undefined ? "" : value}`;
      for (let i = 1; i <= objArray.additionRepeatTimes; i++) {
        a += value;
        i < objArray.additionRepeatTimes ? this.additionSeparator() : "";
      }
    },
    additionSeparator() {
      let value = objArray.additionSeparator;
      value === undefined ? (a += "|") : (a += value);
    },
    separator() {
      let value = objArray.separator;
      console.log(value);
      value === undefined ? (a += "+") : (a += value);
    },
  };
  return Methods.repeatTimes();
  throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
}

module.exports = {
  repeater,
};
