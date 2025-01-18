// fun();
// console.log(a); // if a is not defined then give error 
// let a = 10;  // error
// // var a = 10;  // undefined
// // const a = 10;   // uncaught reference error

// function fun(){
//     console.log("fun");
// }


// -------------------------------------------------------------------------------------

// hoistng nhi hogi
// var a = 10;
// console.log(a); // 10
// var a = 100;
// console.log(a); //100

// function fun(){
//     var a = 200;
//     console.log(a); // 200
// }
// fun();
// console.log(a); // 100

// ----------------------------------------------------------------------------------------

// var a = 10;
// console.log(a); // 10
// a = 100;
// console.log(a); //100

// if(true){
//     var a = 200;
//     console.log(a); // 200
// }
// console.log(a); // 200


// ----------------------------------------------------------------------------------------

// let a = 10;
// console.log(a); // 10
// a = 100;
// console.log(a); //100

// if(true){
//     let a = 200;
//     console.log(a); // 200
// }
// // fun();
// console.log(a); // 100

// ---------------------------------------------------------------------------------------

// let a = 10;
// console.log(a); // 10
// function fun(){
//     console.log(a); // 10
// }
// fun();

//----------------------------------------------------------------------------------------

// let a = 10;
// function fun1(){
//     let b = 100;
//     function fun2() {
//         console.log(b); // 100
//         function fun3() {
//             console.log(a); // 10 
//         }
//         fun3();
//     }
//     fun2();
// }
// fun1();


//----------------------------------------------------------------------------------------

console.log(a);  // undefined
console.log(b); // error
console.log(c); // no value show due to error in previos line

var a  =10;
let b = 100;
const c = 1000;


//----------------------------------------------------------------------------------------

// var a = 10;
// function fun(){
//     // hoisting ho rhi hai
//     console.log(a);  // undefined
//     var a = 200;
//     console.log(a);  // 200
// }
// fun();
// console.log(a);  // 10

//----------------------------------------------------------------------------------------

// var a = 10;
// if(true){
//     // a k liye hoisting nhi ho rhi hai
//     console.log(a); // 10
//     var a = 200;
//     // b k liye hoising ho rhi hai
//     console.log(b);  // error
//     console.log(a);
// }
// let b = 300;
// console.log(b);