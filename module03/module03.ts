// interface
interface Employee1 {
    firstName: string;
    lastName: string;
    fullName(): string;
}
// After defining an interface, you can use it as a type 
let employee: Employee1 = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
// employee.firstName = 10;  //* Error - Type 'number' is not assignable to type 'string'

// Add a question mark (?) at the end of the property name. 
// Use it for properties that are not mandatory.
interface IceCream {
    flavor: string;
    scoops: number;
    instructions?: string; //optional
} 
let myIceCream: IceCream = {
    flavor: 'vanilla',
    scoops: 2
} 
console.log(myIceCream.flavor);
 
function tooManyScoops(dessert: IceCream) {
    if (dessert.scoops >= 4) {
       return dessert.scoops + ' is too many scoops!';
    } else {
       return 'Your order will be ready soon!';
    }
}
console.log(tooManyScoops({flavor: 'vanilla', scoops: 5}));

// Interface extension 
// When extending an interface with one or more interfaces, these rules apply: 
// 1: You must implement all mandatory properties of all interfaces.
// 2: Two interfaces can have the same property if it has exactly the same name and the same type.  
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippedCream?: boolean;
    instructions?: string;
}
let myIceCream2: Sundae = {
    flavor: 'vanilla', //required
    scoops: 2, //required
    sauce: 'caramel', //required
    nuts: true //optional
}
// example of the above function if it were of type "sundae": 
// console.log(tooManyScoops({flavor: 'vanilla', scoops: 5, sauce: 'caramel'})); 

// Creating indexable types
// This index signature indicates that the IceCreamArray interface is indexed with a number and will return a string. 
interface IceCreamArray {
    [index: number]: string;
}
let myIceCream3: IceCreamArray;
myIceCream3 = ['chocolate', 'vanilla', 'strawberry'];
let myStr: string = myIceCream3[0];
console.log(myStr);

// Describing a JavaScript API using an interface 
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'
// Interface describing the shape of our json data
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function fetchPosts(url: string) {
    let response = await fetch(url);
    let body = await response.json();
    return body as Post[];
}
async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}
showPost();


// ********************************
// type alias 
type Employee2 = {
    firstName: string;
    lastName: string;
    fullName(): string;
}
// The main difference is that a type alias cannot be reopened 
// to add new properties, whereas an interface is always extensible.
// An interface is better if you want to have the option to extend the function type. 
// A type alias is better if you want to use unions or tuples.
let employee1: Employee2 = {
    firstName : "Emil",
    lastName: "Andersson",
    fullName(): string {
        return this.firstName + " " + this.lastName;
    }
}
console.log(employee1.fullName());


// ********************************
