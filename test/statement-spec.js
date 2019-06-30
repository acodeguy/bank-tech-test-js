var assert = require("assert")
var Statement = require("../src/statement")

describe("Statement", function () {
  describe("#print", function () {
    it("prints the statement to the screen", function () {
      var transactionLogData = [{
        "date": new Date(),
        "amount": 10,
        "balance": 10
      },
      {
        "date": new Date(),
        "amount": -5,
        "balance": 5
      }
      ]
      var sut = new Statement(transactionLogData)
      let dateTodayFormatted = Statement.getShortDate(new Date())
      var expectedStatement = "date || credit || debit || balance\n" +
        dateTodayFormatted + " || " + "10.00 || || 10.00\n" +
        dateTodayFormatted + " || || 5.00 || 5.00\n"

      assert.strictEqual(sut.print(), expectedStatement)
    })
  })
})
