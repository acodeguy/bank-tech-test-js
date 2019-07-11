/* eslint-disable no-undef */
var assert = require("assert")
var Statement = require("../src/statement")

describe("Statement", function () {
  describe("#print", function () {
    let dateTodayFormatted = Statement.getShortDate(new Date())
    let transactionLog = {
      history: [{
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
    }

    it("prints the statement to the screen in reverse date order", function () {
      var sut = new Statement(transactionLog)
      var expectedStatement = "date || credit || debit || balance\n" +
        dateTodayFormatted + " || || 5.00 || 5.00\n" +
        dateTodayFormatted + " || " + "10.00 || || 10.00\n"

      assert.strictEqual(sut.print(), expectedStatement)
    })
  })
})
