"use strict";
//Class
// classes are another way of defining the form of an object, 
// in addition to describing the types of objects with interfaces and functions.
class Car {
    // Constructor
    constructor(make, color, doors = 4, code) {
        this._make = make;
        this._color = color;
        this._doors = doors;
        this._code = code;
        Car.numberOfCars++; // Increments the value of the static property
    }
    // Accessors
    get make() {
        return this._make;
    }
    set make(make) {
        this._make = make;
    }
    get color() {
        return 'The color of the car is ' + this._color;
    }
    set color(color) {
        this._color = color;
    }
    get doors() {
        return this._doors;
    }
    set doors(doors) {
        // value of parameter doors is an even number 
        if ((doors % 2) === 0) {
            this._doors = doors;
        }
        else {
            throw new Error('Doors must be an even number');
        }
    }
    get code() {
        return this._code;
    }
    // Methods
    accelerate(speed) {
        return `${this.worker()} is accelerating to ${speed} MPH.`;
    }
    brake() {
        return `${this.worker()} is braking with the standard braking system.`;
    }
    turn(direction) {
        return `${this.worker()} is turning ${direction}`;
    }
    // Private: This function performs work for the other method functions and only accessible within class
    // Protected: allows the subclasses of the Car class to use the function
    worker() {
        return this._make;
    }
    // static methods 
    static getNumberOfCars() {
        return Car.numberOfCars;
    }
}
// Properties
Car.numberOfCars = 0; // New static property
// instance 
let car;
car = new Car("Cool Car Company", "Blue", 3, 123456); //An odd number was passed to doors, compiles and executes without errors because no data validation is performed in constructor
console.log(car.doors = 7); //error: the set block should be invoked and an error should occur.
console.log(car.color); //When color is referenced, access to the property is obtained through the get or set accessors, which returns 'The color of the car is blue'.
console.log(car._color); //When _color is referenced, you get access to the raw data of the property, which returns 'blue'.
console.log(car.accelerate(126));
console.log(car.brake());
console.log(car.turn('right'));
let myCar2 = new Car('Galaxy Motors', 'blue', 2, 789);
console.log(Car.getNumberOfCars()); // Returns 2, returns the number of instances.
// class extension 
class ElectricCar extends Car {
    // Constructor
    constructor(make, color, range, code, doors = 2) {
        super(make, color, code, doors);
        this._range = range;
    }
    // Accessors
    get range() {
        return this._range;
    }
    set range(range) {
        this._range = range;
    }
    // Methods
    charge() {
        console.log(this.worker() + " is charging.");
    }
    // Overrides the brake method of the Car class
    brake() {
        return `${this.worker()}  is braking with the regenerative braking system.`;
    }
}
// instance 
let spark = new ElectricCar('Spark Motors', 'silver', 124, 2);
let eCar = new ElectricCar('Electric Car Co.', 'black', 263, 654789);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
//##############################################
// Class components 
// Properties: also referred to as fields, are the data (or attributes) of the object
// Constructor: is a special function used to create and initialize objects based on the class.
// Accessors: are a type of function used to apply get or set to the value of properties. 
// Methods: are functions that define the behaviors or actions that the object can perform.
//Accessors
// You can also use the get and set blocks to validate the data, 
// impose constraints or perform other manipulations on the data before returning it to the program.
//Methods: 
// There is no "function" keyword. 
// This is not required or allowed when defining functions in a class, so it helps to keep the syntax concise.
//##############################################
// Access modifiers 
// Public: If you do not specify an access modifier, the default is public.
// Private: If you modify the member with the private keyword, it cannot be accessed from outside the containing class.
// Protected: you can also have access to the members declared protected within the derived classes.
//##############################################
// static properties and static methods 
// To make a property static, use the static keyword before a method or property name.
// Note that the syntax className.propertyName is used instead of this. when accessing the static property.
// className.method() when accessing the static method through the created instance 
//##############################################
// class extension
// Inheritance allows you to establish relationships and create class hierarchies in object composition. 
// the keyword "extends" is used 
