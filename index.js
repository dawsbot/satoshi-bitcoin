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
    var bigSatoshi = new Big(satoshi);
    return Number(bigSatoshi.div(conversion));
  },

  /**
   * Convert Bitcoin to Satoshi
   * @param {number} bitcoin Amount of Bitcoin to convert
   * @returns {number}
   */
  toSatoshi: function(bitcoin) {
    var bigBitcoin = new Big(bitcoin);
    return Number(bigBitcoin.times(conversion));
  }

};
