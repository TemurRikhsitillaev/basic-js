const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(flag = true) {
    this.reverseflag = flag;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let workStr = string.toUpperCase(),
      alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      shifr = [],
      stackShifr = key.split(""),
      result = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        shifr.push(" ");
        stackShifr.unshift("!");
      } else {
        if (stackShifr[i] === undefined) {
          stackShifr = key.split("");
          string = string.slice(i);
          i = 0;
        }
        shifr.push(stackShifr[i].toUpperCase());
      }
    }
    for (let i = 0; i < workStr.length; i++) {
      let index = 0;
      if (alphabet.indexOf(workStr[i]) > -1) {
        if (
          alphabet.indexOf(workStr[i]) + alphabet.indexOf(shifr[i]) >
          alphabet.length - 1
        ) {
          index = Math.abs(
            alphabet.length -
              (alphabet.indexOf(workStr[i]) + alphabet.indexOf(shifr[i]))
          );
        } else {
          index = alphabet.indexOf(workStr[i]) + alphabet.indexOf(shifr[i]);
        }
        result.push(alphabet[index]);
      } else {
        result.push(workStr[i]);
      }
    }
    if (this.reverseflag === false) {
      return result.reverse().join("");
    } else return result.join("");
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let workStr = string.toUpperCase(),
      alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      shifr = [],
      stackShifr = key.split(""),
      result = [];

    for (let i = 0; i < string.length; i++) {
      if (string[i] === " ") {
        shifr.push(" ");
        stackShifr.unshift("!");
      } else {
        if (stackShifr[i] === undefined) {
          stackShifr = key.split("");
          string = string.slice(i);
          i = 0;
        }
        shifr.push(stackShifr[i].toUpperCase());
      }
    }
    for (let i = 0; i < workStr.length; i++) {
      let index = 0;
      if (alphabet.indexOf(workStr[i]) > -1) {
        if (alphabet.indexOf(workStr[i]) < alphabet.indexOf(shifr[i])) {
          index = Math.abs(
            alphabet.length +
              (alphabet.indexOf(workStr[i]) - alphabet.indexOf(shifr[i]))
          );
        } else {
          index = alphabet.indexOf(workStr[i]) - alphabet.indexOf(shifr[i]);
        }
        result.push(alphabet[index]);
      } else {
        result.push(workStr[i]);
      }
    }
    if (this.reverseflag === false) {
      return result.reverse().join("");
    } else return result.join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
