/*  Module 7: Working with external libraries
    Lab Start */

/*  TODO Add the import statement. */
import * as LoanPrograms from './module07_loan-programs.js'

/*  TODO Update the function calls. */
let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({ principle: 30000, interestRate:5 })
let ConventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({ principle: 40000, interestRate: 5, months: 180})
console.log(interestOnlyPayment);         //* Returns "The interest only loan payment is 125.00" 
console.log(ConventionalLoanPayment);     //* Returns "The conventional loan payment is 316.32"

// Run at the command prompt: 
// tsc --module commonjs module07/module07-exercise/module07_main.ts
// node module07/module07-exercise/module07_main 