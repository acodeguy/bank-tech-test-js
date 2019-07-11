class TransactionLog {
  constructor () {
    this._history = []
  }

  get history () {
    return this._history
  }

  add (transaction) {
    this._history.push(transaction)
  }
}

module.exports = TransactionLog
