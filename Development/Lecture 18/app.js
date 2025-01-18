// function declaration
// function diwali() {
//     console.log("happy diwali")
// }

// function calling
// diwali();

// --------------------------------------------------------------------------
// general function
// function sum() {
//     let a = 10;
//     let b = 20;
//     console.log(a+b);
// }

// sum();


// --------------------------------------------------------------------------
//  parameterised functions
// function sum2(a,b) {
//     console.log(a+b);
// }

// sum2(4,5);


// --------------------------------------------------------------------------

// function kaju(a,b) {
//     console.log(typeof(a+b));   // NaN(Not a Number)  it is also a number
// }

// kaju(250);

// --------------------------------------------------------------------------
// default parameterized function
// function kaju1(a,b=60) {
//     console.log((a+b));   
// }

// kaju1(250);

// --------------------------------------------------------------------------

// function kaju2(a=60,b) {
//     console.log((a+b));   // argument value predominent so a==250 
//     console.log(a);       // 250
// }

// kaju2(250);


// --------------------------------------------------------------------------


// function kaju3(a=60,b=100) {
//     console.log((a+b));   // a=250 b=30
// }

// kaju3(250,30);


// --------------------------------------------------------------------------

// function sam(a) {
//     let kaju;   // undefined-primitive data type provided by js engine
//     // let kaju = undefined;  provided by us / not for use
//     console.log(typeof(kaju));  // undefined
//     console.log(a+kaju);        // NaN
// }
// sam(30);

// --------------------------------------------------------------------------

// let k = null;
// console.log(typeof(k)); //object type of null is object and type of undefined is undefined


// --------------------------------------------------------------------------

// object -> it is a data structure

// let person = {
//     // properties -> key:value  oreder dont matter
//     age : 1,
//     naam : "kaju",
//     color : "red"
// };

// console.log(person);
// dot notation
// --------------------------------------------------------------------------

// function inside object is known as a 'method'

let person = {
    // properties -> key:value  oreder dont matter
    naam : "kaju",
    age : 1,
    color : "red",
    wishDiwali : function kismish(){
        console.log("happy diwali");
    }
};

console.log(person.naam);
console.log(person.wishDiwali());
// console.log(person.kismish()); // wrong
// console.log(person.kismish);