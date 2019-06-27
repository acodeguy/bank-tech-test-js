# Bank Tech Test
## JavaScript Edition
[![Build Status](https://travis-ci.org/acodeguy/bank-tech-test-js.svg?branch=master)](https://travis-ci.org/acodeguy/bank-tech-test-js) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/d1b41d6aad8f4ff9b7a5d05599327b2e)](https://www.codacy.com/app/acodeguy/bank-tech-test-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=acodeguy/bank-tech-test-js&amp;utm_campaign=Badge_Grade)

Create a REPL/JS Console app that simulates a bank account with common actions like deposits, withdrawals and statements

## Acceptance Criteria

Given a customer makes a deposit of 1,000 on 10/01/2012<br>
And a deposit of 2,000 on 13/01/2012<br>
And a withdrawal of 500 on 14/01/2012<br>
When she prints her bank statement<br>
Then she would see:<br>


date || credit || debit || balance<br>
14/01/2012 || || 500.00 || 2,500.00<br>
13/01/2012 || 2,000.00|| || 3,000.00<br>
10/01/2012 || 1,000.00|| || 1,000.00<br>

## Testing

Project was written following TDD with Mocha.