amortize
========

[![Build Status](https://travis-ci.org/cfpb/amortize.svg?branch=master)](https://travis-ci.org/cfpb/amortize)

A node module to calculate the interest paid, principal paid, remaining balance, and monthly payment of a loan.

## Installation

First install [node.js](http://nodejs.org/). Then:

```sh
npm install amortize --save
```

## Usage
Require the module and pass the amount of the loan, annual rate, the length of loan in months, and the length of amortization in months.

```javascript
var amortize = require('amortize');

amortize({
    amount: 180000,
    rate: 4.25,
    totalTerm: 360,
    amortizeTerm: 60
});
```

This will return an object containing the interest, principal, balance, and monthly payment:

```javascript
{
    interest: 36583.36,
    principal: 16546.15,
    balance: 163453.85,
    payment: 885.49
}
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
