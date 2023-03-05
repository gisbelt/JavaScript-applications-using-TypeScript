// Generics 
// Generics define one or more type variables in angle brackets (< >).
// TYPE VARIABLES are also known as type parameters or generic parameters.

// To call the function and pass it a type, append <type> to the function name. 
// For example, getArray<number>
function getArray<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}
let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);                         // OK
// numberArray.push('This is not a number');  // Generates a compile time type check error
let stringArray = getArray<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');                  // OK
// stringArray.push(30);                     // Generates a compile time type check error


// ******************************************************************
// Note: You are not limited to using a single type variable in generic components. 
// For example, the identity function accepts two parameters, value and message, and returns the value parameter. 
// You can use two generics, T and U, to assign different types to each parameter and to the type of the returned value
function identity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}
let returnNumber = identity<number, string>(100, 'Hello!');
let returnString = identity<string, string>('100', 'Hola!');
let returnBoolean = identity<boolean, string>(true, 'Bonjour!');
returnNumber = returnNumber * 100;   // OK
// returnString = returnString * 100;   // Error: Type 'number' not assignable to type 'string'
// returnBoolean = returnBoolean * 100; // Error: Type 'number' not assignable to type 'boolean'


// ******************************************************************
// generic restrictions to limit the types 
// The identity function can accept any type of
// But, in this case, you must restrict the types that the "value" parameter can accept, 
// i.e. types on which you can perform an addition operation  

// declare a custom type as a tuple 
type ValidTypes = string | number;
// extends the type variable with the custom type. 
function identity2<T extends ValidTypes, U> (value: T, message: U) : T {
    // let result: T = value + value;    // Error, see notion: 6 > 3
    console.log(message);
    return value
}
let returnNumber2 = identity2<number, string>(100, 'Hello!');      // OK
let returnString2= identity2<string, string>('100', 'Hola!');     // OK
// let returnBoolean2 = identity2<boolean, string>(true, 'Bonjour!'); // Error: Type 'boolean' does not satisfy the constraint 'ValidTypes'.

// extends keyof 
// extends, in this case, is used to constrain the type of a generic parameter. 
// Example 1:
// `<T, K extends keyof T>`
// `K` can therefore only be a public property name of `T`. It has nothing to do with extending a type or inheritance, contrary to [extending interfaces]
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}
interface Person {
    age: number;
    name: string;
}
const person: Person = {
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
function getPets<T, K extends keyof T>(pet: T, key: K) {
    return pet[key];
}  
let pets1 = { cats: 4, dogs: 3, parrots: 1, fish: 6 };
let pets2 = { 1: "cats", 2: "dogs", 3: "parrots", 4: "fish"}
console.log(getPets(pets1, "fish"));  // Returns 6
// console.log(getPets(pets2, "3"));     // Error


// ******************************************************************
// Declaration of a generic interface 
interface Identity<T, U> {
    value: T;
    message: U;
}
let returnNumber3: Identity<number, string> = {
    value: 25,
    message: 'Hello!'
}
let returnString3: Identity<string, number> = {
    value: 'Hello!',
    message: 25
}

// Declaration of a generic interface as a function type 
interface ProcessIdentity<T, U> {
    (value: T, message: U): T;
}
function processIdentity<T, U> (value: T, message: U) : T {
    console.log(message);
    return value
}
let processor: ProcessIdentity<number, string> = processIdentity;
let returnNumber1 = processor(100, 'Hello!');   // OK
// let returnString1 = processor('Hello!', 100);   // Type check error

// Declaration of a generic interface as a class type 
interface ProcessIdentity2<T, U> {
    value: T;
    message: U;
    process(): T;
}
class processIdentity2<X, Y> implements ProcessIdentity2<X, Y> {
    value: X;
    message: Y;
    constructor(val: X, msg: Y) {
        this.value = val;
        this.message = msg;
    }
    process() : X {
        console.log(this.message);
        return this.value
    }
}
let processor2 = new processIdentity2<number, string>(100, 'Hello');
processor2.process();           // Displays 'Hello'
// processor2.value = '100';       // Type check error

// Declare a generic class without an interface 
class processIdentity3<T, U> {
    private _value: T;
    private _message: U;
    constructor(value: T, message: U) {
        this._value = value;
        this._message = message;
    }
    getIdentity() : T {
        console.log(this._message);
        return this._value
    }
}
let processor3 = new processIdentity3<number, string>(100, 'Hello');
processor3.getIdentity();      // Displays 'Hello'


// ******************************************************************
// Implementation of generics with custom types and classes
class Car2 {
    make: string = 'Generic Car';
    doors: number = 4;
}
class ElectricCar2 extends Car2 {
    make = 'Electric Car';
    doors = 4
}
class Truck2 extends Car2 {
    make = 'Truck';
    doors = 2
}
function accelerate<T extends Car2> (car: T): T {
    console.log(`All ${car.doors} doors are closed.`);
    console.log(`The ${car.make} is now accelerating!`)
    return car
}
let myElectricCar = new ElectricCar2;
accelerate<ElectricCar2>(myElectricCar);
let myTruck = new Truck2;
accelerate<Truck2>(myTruck);