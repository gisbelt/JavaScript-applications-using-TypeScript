"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import the dotenv type library. 
const dotenv = __importStar(require("dotenv"));
// Assign dotenv.config() to a variable 
// config reads the .env file, parses the contents, 
// assigns it to process.env and returns an object with a parsed key, 
// which includes the loaded contents 
// or an error key if an error has occurred.
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
console.log(result.parsed); // Returns { DB_HOST: 'localhost', WEB_HOST: 'staging.adventure-works.com' }
console.log(process.env.DB_HOST);
console.log(process.env.DB_USER);
console.log(process.env.DB_PASS);
console.log(process.env.WEB_HOST);
// Run at the command prompt: 
// tsc --module commonjs module07/mainTypes.ts
// node module07/mainTypes
