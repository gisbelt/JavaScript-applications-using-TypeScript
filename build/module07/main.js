"use strict";
// This file will contain the main code of the application, including the "import" instructions. 
Object.defineProperty(exports, "__esModule", { value: true });
// both files contain a returnGreeting function and now have a naming conflict in the global scope of main.ts. 
// assign a new name to the second instance of returnGreeting 
// You can now use returnGreetingLength instead of the function name in the code. 
const greetings_module07_js_1 = require("./greetings_module07.js"); // imports a single function in the module
const greetings_utilities_module07_js_1 = require("./greetings-utilities_module07.js");
(0, greetings_module07_js_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
(0, greetings_utilities_module07_js_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
// Run at the command prompt: 
// tsc --module commonjs module07/main.ts
// node module07/main 
