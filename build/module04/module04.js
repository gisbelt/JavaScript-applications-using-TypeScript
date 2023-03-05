"use strict";
// function creation
// Named functions
// are loaded in the execution context before the code is executed.
// you can use the function before declaring it
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2);
// ********************************
// Anonymous functions 
// is not preloaded in the execution context and is only executed when the code finds it.
// are created at runtime and must be declared before they can be called.
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3]));
// ********************************
// Arrow functions
// provide an abbreviated syntax for defining an anonymous function. 
let addNumbers2 = (x, y) => x + y;
let total2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
// ********************************
// Example: 
function displayAlert(message) {
    alert('The message is ' + message);
}
console.log(displayAlert(`from Gisbel and the number is ${3}`));
// ######################################
// Parameters
// Required parameters 
// All function parameters are necessary, unless otherwise specified 
// the number of arguments passed to a function must match the number of required parameters that the function expects. 
function addNumbers(x, y) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
// addNumbers(1);    // Returns an error
// ********************************
// Optional Parameters 
// Route parameters can be made optional by appending a question mark (?) 
// Optional parameters should come after mandatory parameters in the parameter list. 
function addNumbers(x, y) {
    if (y === undefined) {
        return x;
    }
    else {
        return x + y;
    }
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 1
// ********************************
// Default parameters 
// Default parameters should appear after required parameters in the parameter list. 
function addNumbers(x, y = 25) {
    return x + y;
}
addNumbers(1, 2); // Returns 3
addNumbers(1); // Returns 26
// ********************************
// REST Parameters 
// REST parameters are treated as an unlimited number of optional parameters. 
// You can leave them deactivated or have as many as you want.
// The ellipsis (...) before restOfNumbers indicate to the compiler to compile an array of 
// the arguments passed to the function and assigns the name that follows it so that it can be used in the function.
let addAllNumbers = (firstNumber, ...restOfNumbers) => {
    let total = firstNumber;
    for (let counter = 0; counter < restOfNumbers.length; counter++) {
        if (isNaN(restOfNumbers[counter])) {
            continue;
        }
        total += Number(restOfNumbers[counter]);
    }
    return total;
};
addAllNumbers(1, 2, 3, 4, 5, 6, 7); // returns 28
addAllNumbers(2); // returns 2
function displayMessage({ text, sender }) {
    console.log(`Message from ${sender}: ${text}`);
}
displayMessage({ sender: 'Christopher', text: 'hello, world' });
// Now you can use function type as a type signature when declaring functions.
let addNumbers3 = (x, y) => x + y;
let subtractNumbers = (x, y) => x - y;
// Test the new functions by returning the result of each function to the console.
console.log(addNumbers3(1, 2));
console.log(subtractNumbers(1, 2));
// You can also use the calculator function type to pass values from another function. 
let doCalculation = (operation) => {
    if (operation === 'add') {
        return addNumbers;
    }
    else {
        return subtractNumbers;
    }
};
console.log(doCalculation('add')(1, 2));
// As far as TypeScript is concerned, these three instructions are identical. 
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;
