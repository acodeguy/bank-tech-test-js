var TransactionLog = require("../src/transaction-log")

class Account {
  constructor (transactionLog = new TransactionLog()) {
    this._balance = 0
    this._transactionLog = transactionLog
  }

  get balance () {
    return this._balance
  }

  set balance (newBalance) {
    this._balance = newBalance
  }

  get transactionLog () {
    return this._transactionLog
  }

  set transactionLog (newTransactionLog) {
    this._transactionLog = newTransactionLog
  }

  transact (amount) {
    if (typeof amount !== "number") {
      throw new Error("Only numbers accepted.")
    } else {
      this.balance += amount
      let transaction = {
        "date": new Date(),
        "amount": amount,
        "balance": this.balance
      }
      this.transactionLog.add(transaction)
    }
  }
}

module.exports = exports = Account
