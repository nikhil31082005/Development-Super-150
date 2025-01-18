// function step1() {
//     console.log("plz wait i am selecting image");
//     setTimeout(function (){
//         console.log("image selected");
//         return "selected image";
//     },5000);
// }

// function step2(image){
//     console.log("plz wait finding filter");
//     setTimeout(function(){
//         console.log(`filter applied on ${image}`);
//     },3000);
// }

// let image = step1();
// step2(image)



function step1(filter) {
    console.log("plz wait i am selecting image");
    setTimeout(function () {
        console.log("image selected");
        filter("selected image");
    }, 5000);
}

function step2(image, caption) {
    console.log("plz wait finding filter");
    setTimeout(function () {
        console.log(`filter applied on ${image}`);
        caption("filtered image");
    }, 3000);
}

function step3(filter, upload) {
    console.log("plz wait adding caption..");
    setTimeout(function () {
        console.log(`caption added on ${filter}`);
        upload("image uploaded");
    }, 4000);
}

function step4(final) {
    console.log("plz wait uploading image..");
    setTimeout(function () {
        console.log(`${final}`);
    }, 4000);
}


// when there is a nesting of call back function one into another is known as call back hell or Pyramid of Doom / horizontal scaling of code. worst way of nesting
// isse bachne k liye we use promises
step1(function (image) {
    step2(image, function (filter) {
        step3(filter, function (final) {
            step4(final);
        });
    });
});
