// Name : Nikhil, Roll : 32 , Set - 05

// TASK 1:

// 1. Write a JavaScript function that creates a closure to keep track of a
// private counter. Each time the function is called, the counter should increment
// by one and return the current count.

function Counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}
const counter = Counter();

console.log(counter());
console.log(counter());
console.log(counter());


// 2. : Implement a function that accesses a variable from an outer function's
// scope and modifies it.


function outer() {
    let outerVariable = 10;
    function inner() {
        outerVariable += 5;
        console.log(outerVariable);
    }
    inner();
    return inner;
}
const innerFn = outer();
innerFn();


// 3. Write JavaScript code to sort an array of objects based on a
// specific property of the objects.

const books = [
    { title: "Book 1",price: 20 },
    { title: "Book 2",price: 15 },
    { title: "Book 3",price: 25 }
];
books.sort((a, b) => a.price - b.price);
console.log(books);


// 4. : Create a constructor function in JavaScript to define a Movie
// object with properties like title , director , and duration .

function Movie(title, director, duration) {
    this.title = title;
    this.director = director;
    this.duration = duration;
}

const movie1 = new Movie("ABC", "XYZ", 2);
const movie2 = new Movie("DEF", "PQR", 1);



// 5.: Implement a function calculate that takes in two numbers and a
// callback function to perform a mathematical operation and return the result.

function calculate(num1, num2, operation) {
    return operation(num1, num2);
}
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log(calculate(5, 3, add));
console.log(calculate(10, 4, subtract));
console.log(calculate(7, 2, multiply));
console.log(calculate(15, 3, divide));
console.log(calculate(10, 0, divide));


// Task2

let globalVar = "I am global";
function outer() {
    let outerVar = 'I am from outer function';
    function inner() {
        console.log(globalVar);
    }
    inner();
}
outer();


let result = [];
let numbers = [1, 2, 3, 4, 5];
for (let element of numbers) {
    if (isEven(element)) {
        result.push(element);
    }
}

function isEven(num) {
    return num % 2 === 0;
}
console.log(result);
