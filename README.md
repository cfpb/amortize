amortize
========

[![Build Status](https://travis-ci.org/cfpb/amortize.svg?branch=master)](https://travis-ci.org/cfpb/amortize)

A node module to calculate the interest paid, principal paid, remaining balance, and monthly payment of a loan.

### What is loan amortization?

From [Ask CFPB](http://www.consumerfinance.gov/askcfpb/771/what-amortization-and-how-could-it-affect-my-loan.html):

> Amortization describes the process of gradual payment of the amount on your loan. For each of your monthly payments, a portion is applied towards the amount of the loan – the principal – and a portion of the payment is applied towards paying the finance charge – the interest.

> A greater percentage of your monthly payment is applied to interest early in the life of the loan, and a greater percentage is applied to the principal at the end. Thus, the principal balance decreases slowly at first and more quickly closer to the end of the loan term. So if you default early in the life of the loan, you will still owe a significant amount on the principal because only a relatively small percentage of your monthly payments were applied to the principal.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install amortize --save
```

## Usage
Require the module and pass the amount of the loan, annual rate, the length of loan in months, and the length of time in months over which you would like to do the amortization calculation. For example for a loan amount of $180,000, an interest rate of 4.25%, a total term of 360 months (30 years) you could calculate the amortization over 60 months (5 years) with the following:

```javascript
var amortize = require('amortize');

amortize({
  amount: 180000,
  rate: 4.25,
  totalTerm: 360,
  amortizeTerm: 60
});
```

This will return an object containing the interest, principal, balance, and monthly payment as both raw and rounded values:

```javascript
{
  interest: 36583.362108097754,  // the interest paid in the amortization period
  principal: 16546.146128485594, // the principal paid in the amortization period
  balance: 163453.85387151438, // the balance left after the amortization period
  payment: 885.4918039430557, // the monthly payments that would be made
  interestRound: '36583.36',
  principalRound: '16546.15',
  balanceRound: '163453.85',
  paymentRound: '885.49'
}
```

This module also supports straightline amortization schedules with equal principal payments:

```javascript
amortize({
  amount: 180000,
  rate: 4.25,
  totalTerm: 360,
  amortizeTerm: 60,
  repaymentType: 'equal-principal-payment',
  partialMonthOffset: 0.5 // optional month offset
});
```


## Contributing

Please read the [Contributing guidelines](CONTRIBUTING.md).

### Running Tests

We are using [nodeunit](https://github.com/caolan/nodeunit) to test. To run tests, first install nodeunit and any dependencies via npm:

```
npm install
```

Run tests with:

```
npm test
```

## Notes

This module is intended for predictive purposes and assumes that the borrower does not pay more than the calculated payment each month.
