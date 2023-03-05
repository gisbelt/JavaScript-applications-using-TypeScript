/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */

/*  TODO: Declare the ConventionalLoan interface. */

/*  TODO: Update the calculateInterestOnlyLoanPayment function. */

interface Loan {
    principle: number;
    interestRate: number; //* Interest rate percentage (eg. 14 is 14%)
} 

interface ConventionalLoan extends Loan {
    months: number //* Total number of months
}

function calculateInterestOnlyLoanPayment(loan: Loan) {
    // Calculates the monthly payment of an interest only loan
    let interest = loan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = loan.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(conventional: ConventionalLoan) {
    // Calculates the monthly payment of a conventional loan
    let interest = conventional.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment;
    payment = conventional.principle * interest / (1 - (Math.pow(1 / (1 + interest), conventional.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalPayment = calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24" 