class Account {
  constructor() {
    this.balance = 0;
  }

  deposit(amount) {
    if(typeof amount != 'number') {
      throw new Error('Only numbers accepted.');
    } else if(amount < 0) {
      throw new Error('Cannot deposit negative value.');
    } else {
      this.balance += amount;
    }
  }
}

module.exports = exports = Account;