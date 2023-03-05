"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnGreeting = void 0;
// Add "export" before the returnGreeting function to make it available in other modules.
function returnGreeting(greeting) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
exports.returnGreeting = returnGreeting;
// It is not necessary to export the getLength function because it is only used in the module scope. 
function getLength(message) {
    return message.length;
}
