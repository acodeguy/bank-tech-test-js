var Account = require("./src/account")
var Statement = require("./src/statement")

let account = new Account()
account.transact(1000)
account.transact(2000)
account.transact(-500)

let statement = new Statement(account.transactionLog).print()

console.log(statement)
