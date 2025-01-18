// 1. object/method calling -> object

// let obj = {
//     a : 10,
//     b : 200,
//     fn : function(){
//         console.log(this);
//     }
// };

// obj.fn();


// 2. direct calling -> window

// function fan() {
//     console.log(this);
// }

// fan();   // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// -----------------------------------------------------------

// let obj = {
//     a : 10,
//     b : 200,
//     fn : function(){
//         console.log(this);
//     }
// };

// obj.fn();  // object

// let ans = obj.fn;
// ans();     // window  direct calling


// Example
// 1.
// console.log(this); // automatic calling -> window

// 2.
// let obj3 = {
//     a : 10,
//     fn : function(){
//         function sam(){
//             console.log(this);
//         }
//         sam();
//     }
// }
// obj3.fn();  // window because this is run due to sam and sam is called using direct method

// 3.eg
// let obj3 = {
//     a : 10,
//     fn : function(){
//         function sam(){
//             console.log(this);
//         }
//         let a = sam;
//         return a;
//     }
// }
// let out = obj3.fn();
// out();  // window because


// 3. Constructor : points to new created object

// function Sam() {
//     this.name = "sam";
// }
// let obj = new Sam();
// console.log(obj);


// 4. -----------------------------------------


// -------------------------------------

// 5. arrow

// let obj = {
//     a : 20,
//     fn : () => {
//         console.log(this);
//     }
// };

// obj.fn();  // window because of fn is called in obj

// let obj2 = {
//     a: 100,
//     fn : function () {
//         console.log(this);  // object
//         let sam = () => {
//             console.log(this);  // object
//         };
//         sam();
//     },
// };
// obj2.fn();
