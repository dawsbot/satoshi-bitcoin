module.exports = {

  toBitcoin: function(satoshi) {
    return satoshi / 100000000;
  },

  toSatoshi: function(bitcoin) {
    return bitcoin * 100000000;
  }

};
