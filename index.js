/**
 * amortization table calculations
 * ===============================
 * calculates the monthly payment
 * calculates remaining loan balance
 * calculates sum of interest payments
 * calculates sum of principal payments
 * @param {number} amount
 * @param {number} rate
 * @param {number} totalTerm
 * @param {number} amortizeTerm
 * @returns {object}
 */
var amortizationCalc = function(amount, rate, totalTerm, amortizeTerm) {
  var periodInt,
      monthlyPayment,
      summedInterest = 0,
      summedPrincipal = 0,
      monthlyIntPaid,
      monthlyPrincPaid,
      summedAmortize = {};

  /** Calculate monthly interest rate and monthly payment */
  periodInt = (rate / 12) / 100;
  monthlyPayment = amount * (periodInt / (1 - Math.pow(1 + periodInt, -(totalTerm))));

  /** Calculate the interest, principal, and remaining balance for each period*/
  var i = 0;
  while( i < amortizeTerm) {
    monthlyIntPaid = amount * periodInt;
    monthlyPrincPaid = monthlyPayment - monthlyIntPaid;
    summedInterest = summedInterest + monthlyIntPaid;
    summedPrincipal = summedPrincipal + monthlyPrincPaid;
    amount = amount - monthlyPrincPaid;
    i += 1;
  }

  summedAmortize.interest = summedInterest;
  summedAmortize.principal = summedPrincipal;
  summedAmortize.balance = amount;

  return summedAmortize;

};

/**
 * Round values to two decimal places
 * @param {object}
 * @returns {object}
 */
var roundNum = function(numObj) {
  for (var property in numObj) {
    numObj[property] = (Math.round(numObj[property] * 100) / 100).toFixed(2);
  }
  return numObj;
};

/**
 * Pass values and return output
 * @param {object} amount, rate, totalTerm, amortizeTerm
 * @example amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60})
 * @returns {object}
 */
var amortize = function(opts) {
  var amortized = amortizationCalc(opts.amount, opts.rate, opts.totalTerm, opts.amortizeTerm);
  return roundNum(amortized);
};

module.exports = amortize;