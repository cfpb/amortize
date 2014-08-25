var amortize = require('../index.js');

var testVal = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60}),
    testVal2 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60}),
    testVal3 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60}),
    testVal4 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60});

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $36583.362108097754 in raw interest'] = function (test) {
  test.equal(testVal.interest, 36583.362108097754);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $36,583.36 in interest'] = function (test) {
  test.equal(testVal.interestRound, 36583.36);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $16,546.15 in principal'] = function (test) {
  test.equal(testVal.principalRound, 16546.15);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will owe $163,453.85'] = function (test) {
  test.equal(testVal.balanceRound, 163453.85);
  test.done();
};

exports['A borrower with a 30 year, $180,000 loan with a 4.25% interest rate will pay $885.49 monthly'] = function (test) {
  test.equal(testVal.paymentRound, 885.49);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate will have paid $37,694.10 in interest'] = function (test) {
  test.equal(testVal2.interestRound, 37694.10);
  test.done();
};

exports['After 5 years a borrower borrowing nothing will owe no interest'] = function (test) {
  test.equal(testVal3.interestRound, 0);
  test.done();
};

exports['After 5 years a borrower borrowing without interest will owe no interest'] = function (test) {
  test.equal(testVal4.interestRound, 0);
  test.done();
};

exports['Throw an error if a string is passed'] = function (test) {
  test.throws(function() {
    amortize({amount: 'Gregor Samsa', rate: 4.25, totalTerm: 360, amortizeTerm: 60});
  },
  Error, 'Specify all values as a positive number');
  test.done();
};

exports['Throw an error if a negative value is passed'] = function (test) {
  test.throws(function() {
    amortize({amount: -180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60});
  },
  Error, 'Specify all values as a positive number');
  test.done();
};