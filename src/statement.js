class Statement {
  constructor (transactionLogData) {
    this._transactionLog = transactionLogData
  }

  get transactionLog () {
    return this._transactionLog
  }

  print () {
    var statement = "date || credit || debit || balance\n"

    this._transactionLog.forEach((transaction) => {
      statement += Statement.getShortDate(transaction.date)
      if (transaction.amount > 0) { statement += " || " + Statement.formatCurrency(transaction.amount) + " ||" }
      if (transaction.amount < 0) { statement += " || || " + Statement.formatCurrency(transaction.amount) }
      statement += " || " + Statement.formatCurrency(transaction.balance) + "\n"
    })
    return statement
  }

  static getShortDate (dateObj) {
    let date = dateObj.getDate()
    let month = dateObj.getMonth() + 1
    let year = dateObj.getFullYear()
    return date + "/" + month + "/" + year
  }

  static formatCurrency (amount) {
    return amount.toFixed(2).replace("-", "")
  }
}

module.exports = Statement
