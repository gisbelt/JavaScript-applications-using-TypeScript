// Add the "export" keyword before the function name to make it available in other modules
export function returnGreeting (greeting: string) {
    console.log(`The message from Greetings_module is ${greeting}.`);
}