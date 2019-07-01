class TransactionLog {
  constructor () {
    this._history = []
  }

  get history () {
    return this._history
  }

  set history (newHistory) {
    this._history = newHistory
  }

  add (transaction) {
    this.history.push(transaction)
  }
}

module.exports = TransactionLog
