/**
 * @module satoshi-bitcoin
 */

var Big = require('big.js');

// @private
var conversion = 100000000;

module.exports = {

  /**
   * Convert Satoshi to Bitcoin
   * @param {number} satoshi Amount of Satoshi to convert
   * @returns {number}
   */
  toBitcoin: function(satoshi) {
    if (typeof satoshi !== 'number'){
      throw new TypeError('toBitcoin must be called on a number');
    }

    //if not an int, return decimal required message
    var bigSatoshi = new Big(satoshi);
    return Number(bigSatoshi.div(conversion));
  },

  /**
   * Convert Bitcoin to Satoshi
   * @param {number} bitcoin Amount of Bitcoin to convert
   * @returns {number}
   */
  toSatoshi: function(bitcoin) {
    if (typeof bitcoin !== 'number'){
      throw new TypeError('toSatoshi must be called on a number');
    }

    //if not a number, throw invalid type
    var bigBitcoin = new Big(bitcoin);
    return Number(bigBitcoin.times(conversion));
  }

};
