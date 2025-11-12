const amortize = require('../index.js');

const testVal = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60});
const testVal2 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60});
const testVal3 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60});
const testVal4 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60});
const testVal5 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0});
const testVal6 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200});

const testVal7 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'});
const testVal8 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'});
const testVal9 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'});
const testVal10 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment'});
const testVal11 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0, repaymentType: 'equal-principal-payment'});
const testVal12 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200, repaymentType: 'equal-principal-payment'});

const testVal13 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5});
const testVal14 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5});
const testVal15 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5});
const testVal16 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60, partialMonthOffset: 0.5});
const testVal17 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0, partialMonthOffset: 0.5});
const testVal18 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200, partialMonthOffset: 0.5});

const testVal19 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});
const testVal20 = amortize({amount: 180000, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});
const testVal21 = amortize({amount: 0, rate: 4.375, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});
const testVal22 = amortize({amount: 180000, rate: 0, totalTerm: 360, amortizeTerm: 60, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});
const testVal23 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 0, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});
const testVal24 = amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 360, principalPayment: 200, repaymentType: 'equal-principal-payment', partialMonthOffset: 0.5});

// Amortize

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $36583.362108097754 in raw interest', () => {
  expect(testVal.interest).toBeCloseTo(36583.362108097754, 10);
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $36,583.36 in interest', () => {
  expect(testVal.interestRound).toBe('36583.36');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will have paid $16,546.15 in principal', () => {
  expect(testVal.principalRound).toBe('16546.15');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate will owe $163,453.85', () => {
  expect(testVal.balanceRound).toBe('163453.85');
});

test('A borrower with a 30 year, $180,000 loan with a 4.25% interest rate will pay $885.49 monthly', () => {
  expect(testVal.paymentRound).toBe('885.49');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate will have paid $37,694.10 in interest', () => {
  expect(testVal2.interestRound).toBe('37694.10');
});

test('After 5 years a borrower borrowing nothing will owe no interest', () => {
  expect(testVal3.interestRound).toBe('0.00');
});

test('After 5 years a borrower borrowing without interest will owe no interest', () => {
  expect(testVal4.interestRound).toBe('0.00');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate paying $200 extra per month will have saved $47,047.19 in interest', () => {
  expect((parseFloat(testVal5.interestRound) - parseFloat(testVal6.interestRound)).toFixed(2)).toBe('47047.19');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate paying $200 extra per month will have saved 109 Months', () => {
  expect(testVal6.termsSaved).toBe(109);
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate paying $200 extra per month will start paying more in principal after 56 months', () => {
  expect(testVal6.principalBreakingTerm).toBe(56);
});

// equal principal payment

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will have paid $35115.625 in raw interest', () => {
  expect(testVal7.interest).toBeCloseTo(35115.625, 10);
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will have paid $35,115.63 in interest', () => {
  expect(testVal7.interestRound).toBe('35115.63');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will have paid $30,000.00 in principal', () => {
  expect(testVal7.principalRound).toBe('30000.00');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments will owe $150,000.00', () => {
  expect(testVal7.balanceRound).toBe('150000.00');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate and equal principal payments will have paid $36,148.44 in interest', () => {
  expect(testVal8.interestRound).toBe('36148.44');
});

test('After 5 years a borrower borrowing nothing with equal principal payments will owe no interest', () => {
  expect(testVal9.interestRound).toBe('0.00');
});

test('After 5 years a borrower borrowing without interest and equal principal payments will owe no interest', () => {
  expect(testVal10.interestRound).toBe('0.00');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments paying $200 extra per month will have saved $23,338.89 in interest', () => {
  expect((parseFloat(testVal11.interestRound) - parseFloat(testVal6.interestRound)).toFixed(2)).toBe('23338.89');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payments paying $200 extra per month will have saved 102 Months', () => {
  expect(testVal12.termsSaved).toBe(102);
});

// amortize with partial month offset

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will have paid $36,293.37 in interest', () => {
  expect(testVal13.interestRound).toBe('36293.37');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will have paid $16,393.39 in principal', () => {
  expect(testVal13.principalRound).toBe('16393.39');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will owe $163,606.61', () => {
  expect(testVal13.balanceRound).toBe('163606.61');
});

test('A borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 will pay $885.49 monthly after the first month and not including the last month', () => {
  expect(testVal13.paymentRound).toBe('885.49');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate and partial month offset of 0.5 will have paid $37,395.01 in interest', () => {
  expect(testVal14.interestRound).toBe('37395.01');
});

test('After 5 years a borrower borrowing nothing with partial month offset of 0.5 will owe no interest', () => {
  expect(testVal15.interestRound).toBe('0.00');
});

test('After 5 years a borrower borrowing without interest and partial month offset of 0.5 will owe no interest', () => {
  expect(testVal16.interestRound).toBe('0.00');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 paying $200 extra per month will have saved $47,045.63 in interest', () => {
  expect((parseFloat(testVal17.interestRound) - parseFloat(testVal6.interestRound)).toFixed(2)).toBe('47045.63');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and partial month offset of 0.5 paying $200 extra per month will have saved 109 Months', () => {
  expect(testVal18.termsSaved).toBe(109);
});

// equal principal payment with partial month offset

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will have paid $34,849.11458333333 in raw interest', () => {
  expect(testVal19.interest).toBeCloseTo(34849.11458333333, 10);
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will have paid $34,849.11 in interest', () => {
  expect(testVal19.interestRound).toBe('34849.11');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will have paid $29,750.00 in principal', () => {
  expect(testVal19.principalRound).toBe('29750.00');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 will owe $150,250.00', () => {
  expect(testVal19.balanceRound).toBe('150250.00');
});

test('After 5 years a borrower with a 30 year, $180,000 loan with a 4.375% interest rate and equal principal payment and partial month offset of 0.5 will have paid $35,874.09 in interest', () => {
  expect(testVal20.interestRound).toBe('35874.09');
});

test('After 5 years a borrower borrowing nothing with equal principal payment and partial month offset of 0.5 will owe no interest', () => {
  expect(testVal21.interestRound).toBe('0.00');
});

test('After 5 years a borrower borrowing without interest and equal principal payment and partial month offset of 0.5 will owe no interest', () => {
  expect(testVal22.interestRound).toBe('0.00');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 paying $200 extra per month will have saved $23,338.00 in interest', () => {
  expect((parseFloat(testVal23.interestRound) - parseFloat(testVal6.interestRound)).toFixed(2)).toBe('23338.00');
});

test('After 30 years a borrower with a 30 year, $180,000 loan with a 4.25% interest rate and equal principal payment and partial month offset of 0.5 paying $200 extra per month will have saved 102 Months', () => {
  expect(testVal24.termsSaved).toBe(102);
});

test('Throw an error if bad repaymentType is passed', () => {
  expect(() => {
    amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, repaymentType: 'banana'});
  }).toThrow("repaymentType must be one of: 'amortize', 'equal-principal-payment'");
});

test('Throw an error if a string is passed', () => {
  expect(() => {
    amortize({amount: 'Gregor Samsa', rate: 4.25, totalTerm: 360, amortizeTerm: 60});
  }).toThrow('Loan amount must be a non-negative value.');
});

test('Throw an error if a negative value is passed', () => {
  expect(() => {
    amortize({amount: -180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60});
  }).toThrow('Loan amount must be a non-negative value.');
});
