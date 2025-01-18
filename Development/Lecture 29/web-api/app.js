// setTimeout(function() {
//     console.log("hii bhai");
// }, 4*1000);

//  set interval return a id
let id = setInterval(function(){
    console.log("hii");
},3000);


setTimeout(function(){
    clearInterval(id);
},10000);