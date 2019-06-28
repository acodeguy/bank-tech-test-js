class Account {
  constructor() {
    this.balance = 0;
  }

  transact(amount) {
    if(typeof amount != 'number') {
      throw new Error('Only numbers accepted.');
    } else {
      this.balance += amount;
    }
  }
}

module.exports = exports = Account;