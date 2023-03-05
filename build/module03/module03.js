"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// After defining an interface, you can use it as a type 
let employee = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
let myIceCream = {
    flavor: 'vanilla',
    scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + ' is too many scoops!';
    }
    else {
        return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({ flavor: 'vanilla', scoops: 5 }));
let myIceCream2 = {
    flavor: 'vanilla',
    scoops: 2,
    sauce: 'caramel',
    nuts: true //optional
};
let myIceCream3;
myIceCream3 = ['chocolate', 'vanilla', 'strawberry'];
let myStr = myIceCream3[0];
console.log(myStr);
// Describing a JavaScript API using an interface 
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        return body;
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log('Post #' + post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    });
}
showPost();
// The main difference is that a type alias cannot be reopened 
// to add new properties, whereas an interface is always extensible.
// An interface is better if you want to have the option to extend the function type. 
// A type alias is better if you want to use unions or tuples.
let employee1 = {
    firstName: "Emil",
    lastName: "Andersson",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(employee1.fullName());
// ********************************
