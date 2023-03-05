"use strict";
// Primitive types in TypeScript
let firstName2 = "Mateo";
let sentence = `My name is ${firstName2}.
I am new to TypeScript.`;
console.log(sentence);
// ******************************** 
// Enumerations (enum) 
// By default, enum values start with a value of 0
// so Permanent is 0, Temp is 1, and Apprentice is 2.
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Permanent"] = 0] = "Permanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
let employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]); //prints "Temp"
// If you want the values to start with a different value, in this case 1, specify it in the enum statement. 
var ContractStatus2;
(function (ContractStatus2) {
    ContractStatus2[ContractStatus2["Permanent"] = 1] = "Permanent";
    ContractStatus2[ContractStatus2["Temp"] = 2] = "Temp";
    ContractStatus2[ContractStatus2["Apprentice"] = 3] = "Apprentice";
})(ContractStatus2 || (ContractStatus2 = {}));
// ******************************** 
// unknown type vs any type
// Properties of type "unknown" cannot be accessed in order 
// to give you some protection at runtime.
let randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
//console.log(randomValue.name);  // Error: Object is of type unknown
//randomValue();                  // Error: Object is of type unknown
//randomValue.toUpperCase();      // Error: Object is of type unknown
// to let you execute it, you must first tell the compiler what type it will be.  
if (typeof randomValue === "string") {
    console.log(randomValue.toUpperCase()); //* Returns MATEO to the console.
}
else {
    console.log("Error - A string was expected here."); //* Returns an error message.
}
// The main difference between "any" and "unknown" 
// is that it cannot interact with a variable of type unknown; 
// "any" omits compile-time checks.
// ******************************** 
// type union:
// A type union uses the vertical or double slash (|) to separate each type. 
// In the following example, multiType can be a number or boolean value:
let multiType;
multiType = 20; //* Valid
multiType = true; //* Valid
// multiType = "twenty";   //* Invalid
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error('Parameters must be numbers or strings');
}
console.log(add('one', 'two')); //* Returns "onetwo"
console.log(add(1, 2)); //* Returns 3
console.log(add('one', 2)); //* Returns error
let newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true,
    stock: "three"
};
let myResult;
myResult = "incomplete"; //* Valid
myResult = "pass"; //* Valid
let diceRoll;
diceRoll = 1; //* Valid
diceRoll = 2; //* Valid
// diceRoll = 7;    //* Invalid 
//##############################################################
// Collection types in TypeScript 
// arrays 
// Matrices can be written in two ways:
// In the first one, the type of the elements followed by square brackets ([ ]) is used. 
let list = [1, 2, 3];
// In the second case, a generic Array type with the syntax Array<type> is used: 
let list2 = [1, 2, 3];
// ******************************** 
// tuples 
// sometimes has an array containing values of mixed types. 
// For that purpose, TypeScript provides the tuple type. 
// To declare a tuple, use the syntax variableName: [type, type, ...].
let person1 = ['Marcia', 35];
// let person2: [string, number] = ['Marcia', 35, true]; // error is generated because the elements of the Tuple array are fixed. The tuple person1 is an array containing exactly one string and one numeric value.
// Note: the order of the values must match the order of the types.
// ******************************** 
