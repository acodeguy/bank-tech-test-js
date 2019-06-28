var assert = require('assert');
var Account = require('../src/account');

describe('Account', function() {
  describe('#new', function() {
    it('creates an account with a starting balance of 0', function() {
      var sut = new Account();
      assert.equal(sut.balance, 0);
    });
  });

  describe('#transact', function() {
    it('only accepts numbers', function() {
      var sut = new Account();
      assert.throws(
        () => sut.transact('hello'),
        Error,
        'Only numbers accepted.'
      )
      assert.throws(
        () => sut.transact(true),
        Error,
        'Only numbers accepted.'
      )
    });

    it('increases the balance when given a positive amount', function() {
      var sut = new Account();
      sut.transact(10);
      assert.equal(sut.balance, 10);
    });

    it('decreases the balance when given a negative amount', function() {
      var sut = new Account();
      sut.transact(-10);
      assert.equal(sut.balance, -10);
    });
  });
});