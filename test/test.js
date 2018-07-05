var amortize = require('../index.js');

var testVal = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60}),
    testVal2 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60}),
    testVal3 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60}),
    testVal4 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60}),
    testVal5 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0}),
    testVal6 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200});

var testVal7 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'}),
    testVal8 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'}),
    testVal9 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'}),
    testVal10 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'}),
    testVal11 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0, repaymentType: 'equal-principal-payment'}),
    testVal12 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200, repaymentType: 'equal-principal-payment'});

var testVal13 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5}),
    testVal14 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5}),
    testVal15 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5}),
    testVal16 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5}),
    testVal17 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0, partialMonthOffset: 0.5}),
    testVal18 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200, partialMonthOffset: 0.5});

var testVal19 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5}),
    testVal20 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5}),
    testVal21 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5}),
    testVal22 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5}),
    testVal23 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5}),
    testVal24 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});

// Amortize

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

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate paying $200 extra per month will have saved $47,047.19 in interest'] = function (test) {
  test.equal((testVal5.interestRound-testVal6.interestRound).toFixed(2), 47047.19);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate paying $200 extra per month will have saved 109 Months'] = function (test) {
  test.equal(testVal6.termsSaved, 109);
  test.done();
};

// equal principal payment

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will have paid $35115.625 in raw interest'] = function (test) {
  test.equal(testVal7.interest, 35115.625);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will have paid $35,115.63 in interest'] = function (test) {
  test.equal(testVal7.interestRound, 35115.63);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will have paid $30,000.00 in principal'] = function (test) {
  test.equal(testVal7.principalRound, 30000.00);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will owe $150,000.00'] = function (test) {
  test.equal(testVal7.balanceRound, 150000.00);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate and equal principal payments will have paid $36,148.44 in interest'] = function (test) {
  test.equal(testVal8.interestRound, 36148.44);
  test.done();
};

exports['After 5 years a borrower borrowing nothing with equal principal payments will owe no interest'] = function (test) {
  test.equal(testVal9.interestRound, 0);
  test.done();
};

exports['After 5 years a borrower borrowing without interest and equal principal payments will owe no interest'] = function (test) {
  test.equal(testVal10.interestRound, 0);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments paying $200 extra per month will have saved $23,338.89 in interest'] = function (test) {
  test.equal((testVal11.interestRound-testVal6.interestRound).toFixed(2), 23338.89);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments paying $200 extra per month will have saved 102 Months'] = function (test) {
  test.equal(testVal12.termsSaved, 102);
  test.done();
};

// amortize with partial month offset

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will have paid $36293.37156663184 in raw interest'] = function (test) {
  test.equal(testVal13.interest, 36293.37156663184);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will have paid $36,293.37 in interest'] = function (test) {
  test.equal(testVal13.interestRound, 36293.37);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will have paid $16,393.39 in principal'] = function (test) {
  test.equal(testVal13.principalRound, 16393.39);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will owe $163,606.61'] = function (test) {
  test.equal(testVal13.balanceRound, 163606.61);
  test.done();
};

exports['A borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will pay $885.49 monthly after the first month and not including the last month'] = function (test) {
  test.equal(testVal13.paymentRound, 885.49);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate and partial month offset of 0.5 will have paid $37,395.01 in interest'] = function (test) {
  test.equal(testVal14.interestRound, 37395.01);
  test.done();
};

exports['After 5 years a borrower borrowing nothing with partial month offset of 0.5 will owe no interest'] = function (test) {
  test.equal(testVal15.interestRound, 0);
  test.done();
};

exports['After 5 years a borrower borrowing without interest and partial month offset of 0.5 will owe no interest'] = function (test) {
  test.equal(testVal16.interestRound, 0);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 paying $200 extra per month will have saved $47,045.63 in interest'] = function (test) {
  test.equal((testVal17.interestRound-testVal6.interestRound).toFixed(2), 47045.63);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 paying $200 extra per month will have saved 109 Months'] = function (test) {
  test.equal(testVal18.termsSaved, 109);
  test.done();
};

// equal principal payment with partial month offset

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will have paid $34,849.11458333333 in raw interest'] = function (test) {
  test.equal(testVal19.interest, 34849.11458333333);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will have paid $34,849.11 in interest'] = function (test) {
  test.equal(testVal19.interestRound, 34849.11);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will have paid $29,750.00 in principal'] = function (test) {
  test.equal(testVal19.principalRound, 29750.00);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will owe $150,250.00'] = function (test) {
  test.equal(testVal19.balanceRound, 150250.00);
  test.done();
};

exports['After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate and equal principal payment and partial month offset of 0.5 will have paid $35,874.09 in interest'] = function (test) {
  test.equal(testVal20.interestRound, 35874.09);
  test.done();
};

exports['After 5 years a borrower borrowing nothing with equal principal payment and partial month offset of 0.5 will owe no interest'] = function (test) {
  test.equal(testVal21.interestRound, 0);
  test.done();
};

exports['After 5 years a borrower borrowing without interest and equal principal payment and partial month offset of 0.5 will owe no interest'] = function (test) {
  test.equal(testVal22.interestRound, 0);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 paying $200 extra per month will have saved $23,338.00 in interest'] = function (test) {
  test.equal((testVal23.interestRound-testVal6.interestRound).toFixed(2), 23338.00);
  test.done();
};

exports['After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 paying $200 extra per month will have saved 102 Months'] = function (test) {
  test.equal(testVal24.termsSaved, 102);
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
