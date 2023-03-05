"use strict";
// Generics 
// Generics define one or more type variables in angle brackets (< >).
// TYPE VARIABLES are also known as type parameters or generic parameters.
// To call the function and pass it a type, append <type> to the function name. 
// For example, getArray<number>
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
numberArray.push(25); // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits'); // OK
// stringArray.push(30);                     // Generates a compile time type check error
// ******************************************************************
// Note: You are not limited to using a single type variable in generic components. 
// For example, the identity function accepts two parameters, value and message, and returns the value parameter. 
// You can use two generics, T and U, to assign different types to each parameter and to the type of the returned value
function identity(value, message) {
    console.log(message);
    return value;
}
let returnNumber = identity(100, 'Hello!');
let returnString = identity('100', 'Hola!');
let returnBoolean = identity(true, 'Bonjour!');
returnNumber = returnNumber * 100; // OK
// extends the type variable with the custom type. 
function identity2(value, message) {
    // let result: T = value + value;    // Error, see notion: 6 > 3
    console.log(message);
    return value;
}
let returnNumber2 = identity2(100, 'Hello!'); // OK
let returnString2 = identity2('100', 'Hola!'); // OK
// let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.
// extends keyof 
// extends, in this case, is used to constrain the type of a generic parameter. 
// Example 1:
// `<T, K extends keyof T>`
// `K` can therefore only be a public property name of `T`. It has nothing to do with extending a type or inheritance, contrary to [extending interfaces]
function getProperty(obj, key) {
    return obj[key];
}
const person = {
    age: 22,
    name: "Tobias",
};
// name is a property of person
// --> no error
const names = getProperty(person, "name");
// gender is not a property of person
// --> error
// const gender = getProperty(person, "gender");
// Example 2:
function getPets(pet, key) {
    return pet[key];
}
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish" };
console.log(getPets(pets1, "fish")); // Returns 6
let returnNumber3 = {
    value: 25,
    message: 'Hello!'
};
let returnString3 = {
    value: 'Hello!',
    message: 25
};
function processIdentity(value, message) {
    console.log(message);
    return value;
}
let processor = processIdentity;
let returnNumber1 = processor(100, 'Hello!'); // OK
class processIdentity2 {
    constructor(val, msg) {
        this.value = val;
        this.message = msg;
    }
    process() {
        console.log(this.message);
        return this.value;
    }
}
let processor2 = new processIdentity2(100, 'Hello');
processor2.process(); // Displays 'Hello'
// processor2.value = '100';       // Type check error
// Declare a generic class without an interface 
class processIdentity3 {
    constructor(value, message) {
        this._value = value;
        this._message = message;
    }
    getIdentity() {
        console.log(this._message);
        return this._value;
    }
}
let processor3 = new processIdentity3(100, 'Hello');
processor3.getIdentity(); // Displays 'Hello'
// ******************************************************************
// Implementation of generics with custom types and classes
class Car2 {
    constructor() {
        this.make = 'Generic Car';
        this.doors = 4;
    }
}
class ElectricCar2 extends Car2 {
    constructor() {
        super(...arguments);
        this.make = 'Electric Car';
        this.doors = 4;
    }
}
class Truck2 extends Car2 {
    constructor() {
        super(...arguments);
        this.make = 'Truck';
        this.doors = 2;
    }
}
function accelerate(car) {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`);
    return car;
}
let myElectricCar = new ElectricCar2;
accelerate(myElectricCar);
let myTruck = new Truck2;
accelerate(myTruck);
