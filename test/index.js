var should = require('chai').should();
var btcConverter = require('../index');
var toBitcoin = btcConverter.toBitcoin;
var toSatoshi = btcConverter.toSatoshi;

describe('#toBitcoin', function() {
  it('converts a moderate amount of Satoshi into BTC', function() {
    toBitcoin(100000000).should.equal(1);
  });

  it('converts a small amount of Satoshi into BTC', function() {
    toBitcoin(3456).should.equal(0.00003456);
  });

  it('converts a large amount of Satoshi into BTC', function() {
    toBitcoin(123456789012345).should.equal(1234567.89012345);
  });

  it('converts to Bitcoin, not to Satoshi', function() {
    toBitcoin(98765).should.not.equal(9876500000000);
  });
});

describe('#toSatoshi', function() {
  it('converts a moderate amount of BTC into Satoshi', function() {
    toSatoshi(0.00000001).should.equal(1);
  });

  it('converts a small amount of BTC into Satoshi', function() {
    toSatoshi(0.00123456).should.equal(123456);
  });

  it('converts a large amount of BTC into Satoshi', function() {
    toSatoshi(98765).should.equal(9876500000000);
  });

  it('converts to Satoshi, not to Bitcoin', function() {
    toSatoshi(123456789012345).should.not.equal(1234567.89012345);
  });
});
