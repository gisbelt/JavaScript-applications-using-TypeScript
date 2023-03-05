// import the dotenv type library. 
import * as dotenv from 'dotenv';
// Assign dotenv.config() to a variable 
// config reads the .env file, parses the contents, 
// assigns it to process.env and returns an object with a parsed key, 
// which includes the loaded contents 
// or an error key if an error has occurred.
const result = dotenv.config()

if (result.error) {
    throw result.error;
}

console.log(result.parsed);  // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }

console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.WEB_HOST);

// Run at the command prompt: 
// tsc --module commonjs module07/mainTypes.ts
// node module07/mainTypes