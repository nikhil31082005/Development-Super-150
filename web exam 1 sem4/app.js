// Set 2
// Question 1

function createCounter() {
    let count = 1;
    console.log(count);   // 1
    return function() {
        return count++;
    };
}
let counter = createCounter();
counter();
console.log(counter());    // 2





// Question 2

var st = myFunc();
function myFunc() {
 return ('Executing myFunc');
}
console.log(st);   // Executing myFunc
