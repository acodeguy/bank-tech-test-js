class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if(amount < 0) {
      throw new Error('Cannot deposit negative value.');
    }
  }
}

module.exports = exports = Account;