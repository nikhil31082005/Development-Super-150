// let p = new Promise((resolve,reject) => {
//     let data = 100;
//     let err = "error";
//     // resolve(data);
//     reject(err);
//     console.log("mai hu ek vada");
// })

// // p.then().catch();

// // p.then(function(d){
// //     console.log(d);
// // });

// // p.then(function(d){
// //     console.log(d);
// // }).catch(function(e){
// //     console.log(e);
// // })

// p.catch(function(e){
//     console.log(e,".catch");
// })


// ----------------------------------------------------------------------------------------
let step1 = function(){
    return new Promise((resolve,reject)=> {
        console.log("plz wait i am selecting image");
        setTimeout(() => {
            resolve("image selected")
        },4000);
    });
};

let step2 = function(image){
    return new Promise((resolve,reject)=> {
        console.log(`plz wait filter is appying on ${image}`);
        setTimeout(() => {
            resolve("filter applied")
        },3000);
    });
};

let step3 = function(){
    return new Promise((resolve,reject)=> {
        console.log("plz wait adding caption..");
        setTimeout(() => {
            resolve("caption added on filtered image")
        },3000);
    });
};

let step4 = function(){
    return new Promise((resolve,reject)=> {
        console.log("uploading image..");
        setTimeout(() => {
            resolve("image uploaded")
        },3000);
    });
};


step1()
.then(function(image){
    console.log(image);
    return step2("image");
})
.then(function(filter){
    console.log(filter);
    return step3();
})
.then(function(caption){
    console.log(caption);
    return step4();
})
.then(function(upload){
    console.log(upload);
});