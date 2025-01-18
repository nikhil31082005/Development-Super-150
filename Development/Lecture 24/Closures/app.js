// function outer(){
//     let a = 100;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// let out = outer();
// out();


function counter() {
    let count = 0;
    return {
        getCount : function(){
            console.log(count)
        },
        increment : function(){
            count++;
        },
        decrement : function(){
            count--;
        },
        reset : function(){
            count = 0;
        }
    }
}

let count1 = counter();
count1.getCount();
count1.increment();
count1.increment();
count1.increment();
count1.getCount();
count1.decrement();
count1.getCount();
count1.reset();
count1.getCount();

console.log(count1); // count is not defined
