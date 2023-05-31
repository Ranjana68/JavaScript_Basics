//Comment - This is my JavaScript Code. Logging statement to the console here
console.log("Hello World");
// All JavaSCiprt statement must end with ;

var varname; //var was used before ES6 (ES2015), there are some issues with var
//use var inside loop which is inside a function -> the scope should be inside loop only but it is available throughout the function
let name = "YourName";

//var => function-scoped
//ES6 : let, const => block-scoped
// Default values for both var and let is undefined

//Issue with global var variables
//gets attached to window object

//global functions also gets attached to window object -> How to solve it ??

console.log("varname : ", varname);

console.log("name : ", name);

// Rules for naming variables
//no reserved keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or hyphen (-)
//convention -> camelCase
//variables are case sensitive
//decalre multiple variables with ,  (but not the modern best practice )

let interestRate = 0.3;
interestRate = 1;
console.log("interestRate", interestRate);

// use const if you dont want to reassign

//Types
// Primitive and Reference Types of Variables
//Primitives are copied by their value
//Objects are copied by their reference
//Primitive - > string, number, boolean, undefined, null

//String Literal

let myName = "Ranjana";

//Number Literal
let age = 30;

//Boolean Literal
let isApproved = false;

//undefined
let firstName = undefined; // implicitly also it would have been undefined

//null
let lastName = null;
let selectedColor = null;

//Another primitive in ES6 -> Symbol

// JS is dynamic languge
// languges -> static (variable types is set and cannot be changed), dynamic (type of variable can change at run time)

console.log(typeof myName); //typeof is an operator
myName = 1;
console.log(typeof myName);

//clear console in the browser using control + l

//In JS all integers and floating point numbers are Numbers

//type of null valued variable is object

console.log(typeof selectedColor);

//Reference Type - Object, Array, Function

// Object is collected of related variables or properties

let person = {
  name: "name",
  age: 23,
};

//Dot notation - concise and shorter
person.name = "yourName";

//Bracket Notation - can be used at run time
person["name"] = "Naam";

let selection = "name";
person[selection] = "name";

console.log("person : ", person);

//Arrays - list of some items

let selectedColors = ["red", "blue"];

console.log("selectedColors : ", selectedColors);
console.log("selectedColors[0] : ", selectedColors[0]);

selectedColors[2] = "green";
console.log("selectedColors : ", selectedColors);

//can be mix of different types like object
selectedColors[3] = 1;
console.log("selectedColors : ", selectedColors);

//array is an object in javascript, use dot notation and properties like length
console.log("selectedColors.length : ", selectedColors.length);

console.log("typeof selectedColors : ", typeof selectedColors);

//Functions
//function performing a task
//parameter -> name
function greet(name) {
  console.log("Hello " + name);
  return "Hello " + name;
}

greet("yourName"); //argument-> yourName

//function calculating a value
function square(number) {
  return number * number;
}

console.log("square(2) : ", square(2));

//String functions split,length etc etc

// conditional statements - if else and switch case
//loops - for,while, do while, for in, for of

// Factory Function - camelCase Notation
// Constructor Function - PascalCase Notation

//modern javascript, if key and value is same we can replace it with just one of it
// {radius : radius} --> {radius}

//getter and setter , get and set

//JavaScript Cloning an Object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

console.log("circle : ", circle);

// for loop

const circle1 = {};
for (let key in circle) circle1[key] = circle[key];

console.log("circle1 : ", circle1);

// const another = Object.assign({extraProperties : 'value'},circle);

const anotherCircle = Object.assign({}, circle);
console.log("anotherCircle : ", anotherCircle);

// Spread Operator
// const another = { ...circle};

const copyCircle = { ...circle };
console.log("copyCircle : ", copyCircle);

//this
//two ways
//method - > object
//function -> global (window in browser and global in node)

// Template Literals ``
//Code looks more cleaner
const message = "This is my \n'first' message";
const another = `This is my 
'first' message`;

console.log("message : ", message);
console.log("another : ", another);

//you can add placeholders using template literals, add expressions or functions as well

message1 = "Hi " + name;
another1 = `Hi ${name} ${2 + 3} ${greet(name)}`;
console.log("message1 : ", message1);
console.log("another1 : ", another1);

//Array Filter

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function (value) {
  return value >= 0;
});

//write using arrow function
const filteredNumbers = numbers.filter((n) => n >= 0);

console.log("numbers : ", numbers);
console.log("filtered : ", filtered);
console.log("filteredNumbers : ", filteredNumbers);

//Array Map

const mappedNumbers = filtered.map((n) => "<li>" + n + "</li>");
const items = filtered.map((n) => {
  const obj = { value: n };
  return obj;
});

const html = "<ul>" + mappedNumbers.join("") + "</ul>";
console.log("mappedNumbers : ", mappedNumbers);
console.log("items : ", items);

console.log("html : ", html);

//we can chain multiple methods -> using filter with map

//Array Reduce

//a=0,c=1 => a=1
//a=1,c=-1 => a=0
//a=0,c=2 => a=2
//a=2,c=3 => a=5
//if a is not set to 0 it points to first element
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("sum : ", sum);
