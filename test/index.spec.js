var should = require('chai').should();
var converter = require('../index');
var toBitcoin = converter.toBitcoin;
var toSatoshi = converter.toSatoshi;

describe('#toBitcoin', function() {
  it('converts simple integer amounts', function() {
    toBitcoin(100000000).should.equal(1);
    toBitcoin(123456789012345).should.equal(1234567.89012345);
  });

  it('converts to Bitcoin, not to Satoshi', function() {
    toBitcoin(98765).should.not.equal(9876500000000);
  });

  it('converts and handles corner case rounding', function() {
    toBitcoin(46).should.equal(.00000046);
  });

  it('handles TypeError input', function() {
    toBitcoin.bind(this, true).should.throw('toBitcoin must be called on a number');
    toBitcoin.bind(this, 1.1).should.throw('toBitcoin must be called on a whole number');
  });
});

describe('#toSatoshi', function() {
  it('converts simple integer amounts', function() {
    toSatoshi(0.00000001).should.equal(1);
    toSatoshi(98765).should.equal(9876500000000);
  });

  it('converts to Satoshi, not to Bitcoin', function() {
    toSatoshi(123456789012345).should.not.equal(1234567.89012345);
  });

  it('converts and handles corner case rounding', function() {
    toSatoshi(4.6).should.equal(460000000);
  });

  it('handles TypeError input', function() {
    toSatoshi.bind(this, true).should.throw('toSatoshi must be called on a number');
  });
});
