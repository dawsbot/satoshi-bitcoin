var should = require('chai').should();
var sb = require('../index.js');

describe('#toBitcoin', function() {
  it('converts simple integer amounts', function() {
    sb.toBitcoin(100000000).should.equal(1);
    sb.toBitcoin(123456789012345).should.equal(1234567.89012345);
  });
  it('converts simple string amounts', function() {
    sb.toBitcoin('100000000').should.equal(1);
    sb.toBitcoin('123456789012345').should.equal(1234567.89012345);
  });

  it('converts to Bitcoin, not to Satoshi', function() {
    sb.toBitcoin(98765).should.not.equal(9876500000000);
  });

  it('converts and handles corner case rounding', function() {
    sb.toBitcoin(46).should.equal(0.00000046);
  });

  it('handles TypeError input', function() {
    sb.toBitcoin
      .bind(this, true)
      .should.throw('toBitcoin must be called on a number or string');
    sb.toBitcoin
      .bind(this, 1.1)
      .should.throw(
        'toBitcoin must be called on a whole number or string format whole number'
      );
  });
});

describe('#toSatoshi', function() {
  it('converts simple integer amounts', function() {
    sb.toSatoshi(0.00000001).should.equal(1);
    sb.toSatoshi(98765).should.equal(9876500000000);
  });
  it('converts simple string amounts', function() {
    sb.toSatoshi('0.00000001').should.equal(1);
    sb.toSatoshi('98765').should.equal(9876500000000);
  });

  it('converts to Satoshi, not to Bitcoin', function() {
    sb.toSatoshi(123456789012345).should.not.equal(1234567.89012345);
  });

  it('converts and handles corner case rounding', function() {
    sb.toSatoshi(4.6).should.equal(460000000);
  });

  it('handles TypeError input', function() {
    sb.toSatoshi
      .bind(this, true)
      .should.throw('toSatoshi must be called on a number or string');
  });
});

describe('#fromSatoshi.to*', function() {
  it('converts simple integer amounts', function() {
    // sb.fromSatoshi(100000000, 'millibitcoin').should.equal(1000);
    // sb.fromSatoshi(100000000, 'centibitcoin').should.equal(100);
    // sb.fromSatoshi(100000000, 'decibitcoin').should.equal(10);

    sb.fromSatoshi(100000000, 'bitcoin').should.equal(1);
    // sb.fromSatoshi(100000000, 'decabitcoin').should.equal(0.1);
    // sb.fromSatoshi(100000000, 'kilobitcoin').should.equal(0.001);
    // sb.fromSatoshi(100000000, 'megabitcoin').should.equal(0.000001);

    sb.fromSatoshi(123456789012345, 'bitcoin').should.equal(1234567.89012345);
  });
  // it('converts simple string amounts', function() {
  //   sb.toBitcoin('100000000').should.equal(1);
  //   sb.toBitcoin('123456789012345').should.equal(1234567.89012345);
  // });

  // it('converts to Bitcoin, not to Satoshi', function() {
  //   sb.toBitcoin(98765).should.not.equal(9876500000000);
  // });

  // it('converts and handles corner case rounding', function() {
  //   sb.toBitcoin(46).should.equal(.00000046);
  // });
});

describe('#fromBit.to*', function() {
  it('converts simple integer amounts', function() {
    // sb.fromBit(1, 'bitcoin').should.equal(0.000001);
  });
  // it('converts simple string amounts', function() {
  //   sb.toBitcoin('100000000').should.equal(1);
  //   sb.toBitcoin('123456789012345').should.equal(1234567.89012345);
  // });

  // it('converts to Bitcoin, not to Satoshi', function() {
  //   sb.toBitcoin(98765).should.not.equal(9876500000000);
  // });

  // it('converts and handles corner case rounding', function() {
  //   sb.toBitcoin(46).should.equal(.00000046);
  // });
});
