var assert = require('assert');
var Account = require('../src/account');

describe('Account', function() {
  describe('#new', function() {
    it('creates an account with a starting balance of 0', function() {
      var sut = new Account();
      assert.equal(sut.balance, 0);
    });
  });

  describe('#deposit', function() {
    it('does not accept negative values', function() {
      var sut = new Account();
      assert.throws(() => sut.deposit(-1), Error, 'Cannot deposit negative value.');
    });

    it('only accepts numbers', function() {
      var sut = new Account();
      assert.throws(
        () => sut.deposit('hello'),
        Error,
        'Only numbers accepted.'
      )
      assert.throws(
        () => sut.deposit(true),
        Error,
        'Only numbers accepted.'
      )
    });

    it('increases the balance by the amount deposited', function() {
      var sut = new Account();
      sut.deposit(10);
      assert.equal(sut.balance, 10);
    });
  });

  describe('#withdraw', function() {
    it('does not accept negative values', function() {
      var sut = new Account();
      assert.throws(
        () => sut.withdraw(-1),
        Error,
        'Cannot withdraw negative amounts.'
      );
    });

    it('only accepts numbers', function() {
      var sut = new Account();
      assert.throws(
        () => sut.withdraw('goodbye'),
        Error,
        'Only numbers accepted.'
      );
    });
  });
});