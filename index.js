var Big = require('big.js');

// quantity of satoshi in X
var conversion = {
  bit: 100000,
  bitcoin: 100000000,
  millibitcoin: 1000,
  centibitcoin: 100,
  decibitcoin: 10,
  decabitcoin: 10,
  kilobitcoin: 1000
};

// es6 polyfill if (!Number.isInteger) {
Number.isInteger = function(num) {
  return typeof num === 'number' && num % 1 === 0;
};

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
    //validate arg
    var satoshiType = typeof satoshi;
    if (satoshiType === 'string') {
      satoshi = toNumber(satoshi);
      satoshiType = 'number';
    }
    if (satoshiType !== 'number') {
      throw new TypeError(
        'toBitcoin must be called on a number or string, got ' + satoshiType
      );
    }
    if (!Number.isInteger(satoshi)) {
      throw new TypeError(
        'toBitcoin must be called on a whole number or string format whole number'
      );
    }

    var bigSatoshi = new Big(satoshi);
    return Number(bigSatoshi.div(conversion.bitcoin));
  },

  /**
   * Convert Bitcoin to Satoshi
   * @param {number|string} bitcoin Amount of Bitcoin to convert
   * @throws {TypeError} Thrown if input is not a number or string
   * @returns {number}
   */
  toSatoshi: function(bitcoin) {
    //validate arg
    var bitcoinType = typeof bitcoin;
    if (bitcoinType === 'string') {
      bitcoin = toNumber(bitcoin);
      bitcoinType = 'number';
    }
    if (bitcoinType !== 'number') {
      throw new TypeError(
        'toSatoshi must be called on a number or string, got ' + bitcoinType
      );
    }

    var bigBitcoin = new Big(bitcoin);
    return Number(bigBitcoin.times(conversion.bitcoin));
  },

  fromSatoshi: function(satoshi, to) {
    var satoshiType = typeof satoshi;
    if (satoshiType === 'string') {
      satoshi = toNumber(satoshi);
      satoshiType = 'number';
    }
    if (satoshiType !== 'number') {
      throw new TypeError(
        'fromSatoshi must be called on a number or string, got ' + satoshiType
      );
    }
    var bigSatoshi = new Big(satoshi);

    return Number(bigSatoshi.div(conversion[to]));
  }
};
