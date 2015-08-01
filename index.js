/**
 * @module satoshi-bitcoin
 */

var Big = require('big.js');

// @private
var conversion = 100000000;

// @private
function isNotInt(n) {
     return n % 1 !== 0;
}

// @private
function toNumber(notNum) {
  return Number(notNum);
}

module.exports = {

  /**
   * Convert Satoshi to Bitcoin
   * @param {number|string} satoshi Amount of Satoshi to convert. Must be a whole number
   * @throws {TypeError} Thrown if input is not a number or string
   * @throws {TypeError} Thrown if input is not a whole number or string format whole number
   * @returns {number}
   */
  toBitcoin: function(satoshi) {
    if (typeof satoshi === 'string') {
      satoshi = toNumber(satoshi);
    }
    if (typeof satoshi !== 'number'){
      throw new TypeError('toBitcoin must be called on a number or string');
    }
    if (isNotInt(satoshi)) {
      throw new TypeError('toBitcoin must be called on a whole number or string format whole number');
    }

    var bigSatoshi = new Big(satoshi);
    return Number(bigSatoshi.div(conversion));
  },

  /**
   * Convert Bitcoin to Satoshi
   * @param {number|string} bitcoin Amount of Bitcoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
  toSatoshi: function(bitcoin) {
    if (typeof bitcoin === 'string') {
      bitcoin = toNumber(bitcoin);
    }
    if (typeof bitcoin !== 'number'){
      throw new TypeError('toSatoshi must be called on a number or string');
    }

    //if not a number, throw invalid type
    var bigBitcoin = new Big(bitcoin);
    return Number(bigBitcoin.times(conversion));
  }

};
