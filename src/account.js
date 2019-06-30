var TransactionLog = require("../src/transaction-log")

class Account {
  constructor (transactionLog = new TransactionLog()) {
    this.balance = 0
    this.transactionLog = transactionLog
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
