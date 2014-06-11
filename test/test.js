var amortize = require('../index.js');

var testVal = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60}),
    testVal2 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60});

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $36,583.36 in interest'] = function (test) {
  test.equal(testVal.interest, 36583.36);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $16,546.15 in principal'] = function (test) {
  test.equal(testVal.principal, 16546.15);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will owe $163,453.85'] = function (test) {
  test.equal(testVal.balance, 163453.85);
  test.done();
};

exports['A borrower with a 30 year, $180,000 loan with a 4.25% interest rate will pay $885.49 monthly'] = function (test) {
  test.equal(testVal.payment, 885.49);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate will have paid $37,694.10 in interest'] = function (test) {
  test.equal(testVal2.interest, 37694.10);
  test.done();
};