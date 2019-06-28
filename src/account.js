class Account {
  constructor() {
    this.balance = 0;
    this.transactionHistory = [];
  }

  transact(amount) {
    if(typeof amount != 'number') {
      throw new Error('Only numbers accepted.');
    } else {
      this.balance += amount;
      this.transactionHistory.push(
        {
          'date': new Date(),
          'amount': amount,
          'balance': this.balance
        }
      );
    }
  }
}

module.exports = exports = Account;