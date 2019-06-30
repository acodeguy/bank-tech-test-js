var assert = require('assert');
var TransactionLog = require('../src/transaction-log');

describe('TransactionLog', function() {
  describe('#add', function() {
    it('adds a new transaction to the log', function() {
      let dateNow = new Date();
      let transaction = {
        'date': dateNow,
        'amount': 5,
        'balance': 5
      }
      var sut = new TransactionLog();

      sut.add(transaction);

      assert.deepEqual(sut.history, [transaction]);
      assert.equal(sut.history[0].date, dateNow);
      assert.equal(sut.history[0].amount, 5);
      assert.equal(sut.history[0].balance, 5);
    });
  });
});