let child = document.querySelector('#child');
let parent = document.querySelector('#parent');
let grndparent = document.querySelector('#grandparent');

// child.addEventListener('click', function(){
//     console.log("me hu child");
// })

// parent.addEventListener('click', function(){
//     console.log("me hu papa");
// })

// grndparent.addEventListener('click', function(){
//     console.log("me hu dadda");
// })

// child.addEventListener('click', function(){
//     console.log("me hu child");
// },true)

// parent.addEventListener('click', function(){
//     console.log("me hu papa");
// },true)

// grndparent.addEventListener('click', function(){
//     console.log("me hu dadda");
// },true)


// child.addEventListener('click', function(){
//     console.log("me hu child");
// },true)

// parent.addEventListener('click', function(){
//     console.log("me hu papa");
// },false)

// grndparent.addEventListener('click', function(){
//     console.log("me hu dadda");
// },true)

// from html to the child => event capturing  usecaapture=> true
// from child to html => event bubbling usecapture=> false


// let btn = document.querySelector('button')
// let inpEl = document.querySelector('input')

// inpEl.addEventListener('input', function(e){
//     console.log(e.target.value);
// })

// inpEl.addEventListener('keydown', function(e){
//     if(e.which == 13){
//         console.log(e.target.value);
//     }
// })

// inpEl.addEventListener('keyup', function(e){
//     if(e.which == 13){
//         console.log(e.target.value);
//     }
// })




child.addEventListener('click', function(e){
    e.stopPropagation();
    console.log("me hu child");
})

parent.addEventListener('click', function(){
    console.log("me hu papa");
})

grndparent.addEventListener('click', function(){
    console.log("me hu dadda");
})