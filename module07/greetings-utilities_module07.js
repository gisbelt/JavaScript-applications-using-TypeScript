"use strict";
exports.__esModule = true;
exports.returnGreeting = void 0;
// Add "export" before the returnGreeting function to make it available in other modules.
function returnGreeting(greeting) {
    var greetingLength = getLength(greeting);
    console.log("The message from GreetingsLength_module is ".concat(greeting, ". It is ").concat(greetingLength, " characters long."));
}
exports.returnGreeting = returnGreeting;
// It is not necessary to export the getLength function because it is only used in the module scope. 
function getLength(message) {
    return message.length;
}
