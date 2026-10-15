//lesson 1
//console.log("Hello World");
//console.log("This is a test");

//window.alert("Welcome to my website!");

//document.getElementById("name").textContent="hey im amal";
//document.getElementById("welcome-message").textContent="welcome to my practice area";

//lesson 2 (Variables and Data Types)
//cant have the same name for a variable

/*let x = 100;
let x;
x=200
console.log(x);

let age= 21;
let price= 19.99;
let name= "Amal";
let online= true;

let forsale= false;

//typeof operator is used to check the data type of a variable
console.log(typeof age);
console.log(typeof price);
console.log(typeof name);
console.log(typeof online);

console.log(`i am ${age} years old`);
console.log(`the price is $${price}`);
console.log(`my name is ${name}`);
console.log(`amola is online: ${online}`);
console.log(`is this dress for sale? ${forsale}`);
*/

let fullName= "Amal";
let age=21;
let student= true;

// document is an object that represents the HTML document loaded in the browser. The getElementById() method is used to access HTML elements by their ID attribute. The textContent property is used to set or get the text content of an element.
document.getElementById("name").textContent= 'your name is ' + fullName;
document.getElementById("age").textContent= 'you are ' + age + ' years old';
document.getElementById("student").textContent= 'are you a student at kfupm ? ' + student;