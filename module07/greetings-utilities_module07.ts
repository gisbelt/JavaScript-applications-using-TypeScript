
// Add "export" before the returnGreeting function to make it available in other modules.
export function returnGreeting (greeting: string) {
    let greetingLength = getLength(greeting);
    console.log(`The message from GreetingsLength_module is ${greeting}. It is ${greetingLength} characters long.`);
}
// It is not necessary to export the getLength function because it is only used in the module scope. 
function getLength(message: string): number {
    return message.length
}