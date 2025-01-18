// var a = 10;
// console.log(a);

// ----------------------------------------------------------------------------------------

// var a = 100;
// let b = 10;

// function fun(){
//     // console.log(a);  // this gives error => ReferenceError: Cannot access 'a' before initialization
//     let a = 1000;
//     console.log(a);
// }
// fun();
// console.log(a);
// console.log(b);

// ----------------------------------------------------------------------------------------

// var a = 100;
// let b = 10;

// if(true){
//     console.log(a);  // 100
//     var a = 1000;
//     let b = 2000;
//     console.log(a);  // 1000
//     console.log(b);  // 2000
// }
// console.log(a);  // 1000
// console.log(b);  // 10


// ----------------------------------------------------------------------------------------

// function fun1(fn) {
//     console.log('fun1');
//     fn();
// }

// function fun2() {
//     console.log('fun2');
// }

// fun1(fun2);     // Higher order function

// ----------------------------------------------------------------------------------------

// function fun1() {
//     console.log("inside fun 1");
//     function fun2() {
//         console.log("inside fun 2");
//     }
//     return fun2;       // Higher order function
// }

// let returnesValue = fun1();
// returnesValue();

// ----------------------------------------------------------------------------------------
