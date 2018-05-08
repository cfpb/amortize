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
 * @param {number} principalPayment
 * @param {string} repaymentType
 * @param {number} partialMonthOffest - use this if you need to offest the beginig of the payment
 * @returns {object}
 */
var amortizationCalc = function(amount, rate, totalTerm, amortizeTerm, principalPayment, repaymentType, partialMonthOffest) {
  var periodInt,
      monthlyPayment,
      summedInterest = 0,
      summedPrincipal = 0,
      monthlyIntPaid,
      monthlyPrincPaid,
      summedAmortize = {},
      montlyPrincipalPayment = 0,
      principalPayment = (!!principalPayment) ? parseInt(principalPayment,10) : 0;

  // Calculate monthly interest rate and monthly payment
  periodInt = (rate / 12) / 100;
  
  if (repaymentType == "amortize") {
    monthlyPayment = amount * (periodInt / (1 - Math.pow(1 + periodInt, -(totalTerm))));
    // If zero or NaN is returned (i.e. if the rate is 0) calculate the payment without interest
    monthlyPayment = monthlyPayment || amount / totalTerm;  
  } else if (repaymentType == "equal-principal-payment") {
    montlyPrincipalPayment = amount / totalTerm;
  } else {
    return {error: "unsupported repaymentType"};
  }
  
  // Calculate the interest, principal, and remaining balance for each period
  let boundedMonthlyPayment;
  var i = 0;
  while( i < amortizeTerm) {
    if(amount < 0)
      break;
    let termOffset = (i == 0 ? partialMonthOffest : 1);
    monthlyIntPaid = amount * periodInt * termOffset;
    if (repaymentType == "equal-principal-payment") {
      monthlyPayment = montlyPrincipalPayment * termOffset + monthlyIntPaid;
    }
    boundedMonthlyPayment = Math.min(amount + monthlyIntPaid, monthlyPayment);
    monthlyPrincPaid = boundedMonthlyPayment * termOffset - monthlyIntPaid + principalPayment;
    summedInterest = summedInterest + monthlyIntPaid;
    summedPrincipal = summedPrincipal + monthlyPrincPaid;
    amount = amount - monthlyPrincPaid;
    i += 1;
  }

  summedAmortize.termsSaved = amortizeTerm - i;
  summedAmortize.principalPaymentsTotal = i * principalPayment;
  summedAmortize.interest = summedInterest;
  summedAmortize.principal = summedPrincipal;
  summedAmortize.balance = amount;
  summedAmortize.payment = boundedMonthlyPayment + principalPayment;

  return summedAmortize;

};

/**
 * Throw an error if a string or number below 0 is passed
 * @param {object}
 * @returns {object}
 */
var errorCheck = function(opts) {
  for (var key in opts) {
    if (opts.hasOwnProperty(key)) {
      if (key == "repaymentType") {
        if (!["amortize", "equal-principal-payment"].includes(opts[key]) ) {
          throw new Error("repaymentType must be one of: 'amortize', 'equal-principal-payment'")
        }
      } else if (typeof opts[key] === 'undefined' || isNaN(parseFloat(opts[key])) || opts[key] < 0) {
        throw new Error('Loan ' + key + ' must be a non-negative value.');
      }
    }
  }
};

/**
 * Round values to two decimal places
 * @param {object}
 * @returns {object}
 */
var roundNum = function(numObj) {
  var tmp = {};
  for (var property in numObj) {
    tmp[property] = numObj[property];
    tmp[property + 'Round'] = (Math.round(numObj[property] * 100) / 100).toFixed(2);
  }
  return tmp;
};

/**
 * Pass values and return output
 * @param {object} amount, rate, totalTerm, amortizeTerm
 * @example amortize({amount: 180000, rate: 4.25, totalTerm: 360, amortizeTerm: 60, principalPayment: 200})
 * @returns {object}
 */
var amortize = function(opts) {
  errorCheck(opts);
  var amortized = amortizationCalc(
    opts.amount, 
    opts.rate, 
    opts.totalTerm, 
    opts.amortizeTerm, 
    opts.principalPayment,
    opts.repaymentType || 'amortize',
    opts.partialMonthOffest || 1);
  return roundNum(amortized);
};

module.exports = amortize;
