/*  Module 8: Organize code using TypeScript namespaces
Lab Start */

/*  TODO Add reference paths. */
/// <reference path="module08_loans.ts" />
/// <reference path="module08_loan-programs.ts" />

/*  TODO Update the function calls. */
let interestOnlyPayment2 = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment2);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     //* Returns "The conventional loan payment is 237.24"

// run the following command to compile all dependent .ts files and create a single JavaScript file named main.js. 
// tsc --outFile  module08/module08-exercise/main.js module08/module08-exercise/module08-main.ts 