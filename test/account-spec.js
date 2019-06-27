var assert = require('assert');
var Account = require('../src/account');

describe('Account', function() {
  describe('#new', function() {
    it('creates an account with a starting balance of 0', function() {
      var sut = new Account();
      assert.equal(sut.balance, 0);
    });
  });
});