let arr = [10,20,30,40];
// 1.forEach
// arr.forEach(function(item,index){
// console.log(`index : ${index} -- item : ${item}`)
// })

// ----------------------------

// 2. map

// let newArr = arr.map(function(item,index){
//     return item*2;
// })
// console.log(arr)    // [10,20,30,40]
// console.log(newArr)  //[20, 40, 60, 80]


// 3. filter

let newArr = arr.filter(function(item,index){
    if(item>20){
        return true;
    }
})

console.log(arr)    // [10,20,30,40]
console.log(newArr)   // [30,40]



