// Code organization with modules - export - import
// Any file containing a higher level import or export instruction is considered a module. 

// Add the "export" keyword before the function name to make it available in other modules
// The "import" instruction can take several forms depending on its objectives:

// ****************************
// To import a single export from a module, do the following: 
// import { <component name> } from '<module name>' 

// To change the name of an import, use the keyword "as": 
// import { <component name> as <new name> } from '<module name>'

// To import the entire module in a single variable and use it to access module exports, do the following: 
// import * as <variable name> from '<module name>'


// ############################################################### 
// Type libraries 
// Although some JavaScript libraries will have type definitions, you will find that many of them do not. 
// Type definitions are installed using the @types prefix. 
// npm install --save-dev @types/<library-name> 

// In the terminal, use npm to install the dotenv type library in the project folder. 
// npm install dotenv 

// The dotenv type definition also requires the installation of the node type definition 
// npm install --save-dev @types/node @types/dotenv 
// yarn add --dev  @types/node @types/dotenv 

// Create a file named .env in the root folder of the project 
// import the dotenv type library. 
// import * as dotenv from 'dotenv';
// the rest is in the file module07/mainTypes.ts 


// ############################################################### 
// compile modules: 
// "tsc --module commonjs module07/main.ts / node module07/main".
// "tsc --module commonjs module07/mainTypes.ts / node module07/mainTypes
// compile ES6 for use in a web browser: 
// "tsc --module es6 module07/main.ts"
