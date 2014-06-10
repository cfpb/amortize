var amortize = require('../index.js');

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest will have paid $36,583.36 in interest'] = function (test) {
  test.equal(amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60}).interest, 36583.36);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest will have paid $37,694.10 in interest'] = function (test) {
  test.equal(amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60}).interest, 37694.10);
  test.done();
};