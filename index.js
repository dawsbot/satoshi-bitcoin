/**
 * @module satoshi-bitcoin
 */
module.exports = {

  /**
   * Convert Satoshi to Bitcoin
   * @param {number} satoshi Amount of Satoshi to convert
   * @returns {number}
   */
  toBitcoin: function(satoshi) {
    return satoshi / 100000000;
  },

  /**
   * Convert Bitcoin to Satoshi
   * @param {number} bitcoin Amount of Bitcoin to convert
   * @returns {number}
   */
  toSatoshi: function(bitcoin) {
    return bitcoin * 100000000;
  }

};
