// function creation
// Named functions
// are loaded in the execution context before the code is executed.
// you can use the function before declaring it
function addNumbers (x: number, y: number): number {
    return x + y;
}
addNumbers(1, 2);

// ********************************
// Anonymous functions 
// is not preloaded in the execution context and is only executed when the code finds it.
// are created at runtime and must be declared before they can be called.
let sum = function (input: number[]): number {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}
console.log(sum([1, 2, 3]));

// ********************************
// Arrow functions
// provide an abbreviated syntax for defining an anonymous function. 
let addNumbers2 = (x: number, y: number): number => x + y;

let total2 = (input: number[]): number => {
    let total: number =  0;
    for(let i = 0; i < input.length; i++) {
        if(isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
}

// ********************************
// Example: 
function displayAlert(message: string | number) {
    alert('The message is ' + message);
}
console.log(displayAlert(`from Gisbel and the number is ${3}`))


// ######################################
// Parameters
// Required parameters 
// All function parameters are necessary, unless otherwise specified 
// the number of arguments passed to a function must match the number of required parameters that the function expects. 
function addNumbers (x: number, y: number): number {
    return x + y;
}
addNumbers(1, 2); // Returns 3
// addNumbers(1);    // Returns an error

// ********************************
// Optional Parameters 
// Route parameters can be made optional by appending a question mark (?) 
// Optional parameters should come after mandatory parameters in the parameter list. 
function addNumbers (x: number, y?: number): number {
    if (y === undefined) {
        return x;
    } else {
        return x + y;
    }
}
addNumbers(1, 2); // Returns 3
addNumbers(1);    // Returns 1

// ********************************
// Default parameters 
// Default parameters should appear after required parameters in the parameter list. 
function addNumbers (x: number, y = 25): number {
    return x + y;
}
addNumbers(1, 2);  // Returns 3
addNumbers(1);     // Returns 26

// ********************************
// REST Parameters 
// REST parameters are treated as an unlimited number of optional parameters. 
// You can leave them deactivated or have as many as you want.
// The ellipsis (...) before restOfNumbers indicate to the compiler to compile an array of 
// the arguments passed to the function and assigns the name that follows it so that it can be used in the function.
let addAllNumbers = (firstNumber: number, ...restOfNumbers: number[]): number => {
    let total: number =  firstNumber;
    for(let counter = 0; counter < restOfNumbers.length; counter++) {
       if(isNaN(restOfNumbers[counter])){
          continue;
       }
       total += Number(restOfNumbers[counter]);
    }
    return total;
}
addAllNumbers(1, 2, 3, 4, 5, 6, 7);  // returns 28
addAllNumbers(2);                    // returns 2
// addAllNumbers(2, 3, "three");        // flags error due to data type at design time, returns 5

// ********************************
// Object Destructuring Parameters
// To enable named parameters, you can use a technique called "object destructured parameters". 
// This technique allows you to define named parameters, instead of positional ones, 
// in functions using an interface.
interface Message {
    text: string;
    sender: string;
}
function displayMessage({text, sender}: Message) {
     console.log(`Message from ${sender}: ${text}`);
}
displayMessage({sender: 'Christopher', text: 'hello, world'});


// ################################
// function types
// This design is useful if you want to apply the same function type signature to more than one function. 

// function type called calculator by a type alias. 
type calculator = (x: number, y: number) => number; 
// function type called Calculator by an interface
interface Calculator {
    (x: number, y: number): number;
}
// Now you can use function type as a type signature when declaring functions.
let addNumbers3: calculator = (x, y): number => x + y;
let subtractNumbers: Calculator = (x, y): number => x - y;
// Test the new functions by returning the result of each function to the console.
console.log(addNumbers3(1, 2));
console.log(subtractNumbers(1, 2));
// You can also use the calculator function type to pass values from another function. 
let doCalculation = (operation: 'add' | 'subtract'): Calculator => {
    if (operation === 'add') {
        return addNumbers;
    } else {
        return subtractNumbers;
    }
}
console.log(doCalculation('add')(1, 2)) 
// As far as TypeScript is concerned, these three instructions are identical. 
// let addNumbers: Calculator = (x: number, y: number): number => x + y;
// let addNumbers: Calculator = (number1: number, number2: number): number => number1 + number2;
// let addNumbers: Calculator = (num1, num2) => num1 + num2;
