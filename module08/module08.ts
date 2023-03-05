// Code organization using single-file namespaces
// Single file namespaces are compiled in the same way as any other TypeScript file 
// Define a new namespace with the ""namespace"" keyword followed by the namespace name. 
// You can define as many namespaces as necessary in a single TypeScript file
namespace AllGreeting {
    export namespace Greetings {
        // You can now define functions and classes within the namespace definition. 
        export function returnGreeting (greeting: string) {
            console.log(`The message from namespace Greetings is ${greeting}.`);
        }
    
    
    }
    
    export namespace GreetingsWithLength {
        export function returnGreeting (greeting: string) {
            let greetingLength = getLength(greeting);
            console.log(`The message from namespace GreetingsWithLength is ${greeting}. It is ${greetingLength} characters long.`);
        }
        function getLength(message: string): number {
            return message.length
        }
    }
}


// To use a class or function within a namespace, use the namespace name as a prefix 
// returnGreeting('Hello');                     // Returns error
AllGreeting.Greetings.returnGreeting('Bonjour');         // OK
AllGreeting.GreetingsWithLength.returnGreeting('Hola');  // OK

// ****************************************
// Definition of a namespace alias 
// TypeScript creates a hierarchy of nested namespaces that is easy to traverse.
// To do this, use the keyword "import". 
import greet = AllGreeting.Greetings;
greet.returnGreeting('Bonjour'); // You can now use greet instead of AllGreetings.Greetings in the code.


// ########################################################################
// Code organization using multi-file namespaces 
// There are two ways to compile multiple file namespaces: 
// 1. per-file compilation:
// By default, when you run the TypeScript compiler on main.ts, 
// it will examine the reference instructions in the file and generate a JavaScript file for each input file. 
// 2. single-file compilation.
// You can also tell the compiler to generate a single JavaScript output file using the --outFile option 
// tsc --outFile main.js main.ts 
// instructs the compiler to generate a single JavaScript file named main.js. 

// To inform TypeScript of the relationship between interfaces.ts and functions.ts:
// add "reference" to interfaces.ts using triple slash syntax (///) to the top of functions.ts. 
// And then, in main.ts, which is related to both interfaces.ts and functions.ts, 
// add reference to both files.

// namespace Inferfaces {}
// /// <reference path="interfaces.ts" />
// namespace Functions {}
// /// <reference path="interfaces.ts" />
// /// <reference path="functions.ts" />
// let x = Functions.functionName();