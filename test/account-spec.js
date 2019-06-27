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
  })
});