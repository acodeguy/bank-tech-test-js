class TransactionLog {
  constructor() {
    this.history = [];
  }

  add(transaction) {
    this.history.push(transaction);
  }
}

module.exports = TransactionLog;