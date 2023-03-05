// This file will contain the main code of the application, including the "import" instructions. 

// both files contain a returnGreeting function and now have a naming conflict in the global scope of main.ts. 
// assign a new name to the second instance of returnGreeting 
// You can now use returnGreetingLength instead of the function name in the code. 
import { returnGreeting } from './greetings_module07.js'; // imports a single function in the module
import { returnGreeting as returnGreetingLength } from './greetings-utilities_module07.js';

returnGreeting('Hola!')  // Displays 'The message from Greetings_module is Hola!'
returnGreetingLength('Ciao!');  // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'


// Run at the command prompt: 
// tsc --module commonjs module07/main.ts
// node module07/main 