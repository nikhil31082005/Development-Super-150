// function Sam(naam ,umar, rang){
//     this.name = naam;
//     this.age = umar;
//     this.favColor = rang;
// }
// let p = new Sam("sam",90,"black");
// console.log(p);

// console.log();


// ------------------------------------------------------------------------------

// function Sam(naam ,umar, rang){
//     this.name = naam;
//     this.age = umar;
//     this.favColor = rang;
//     this.fn = function(){
//         console.log("kaju");
//     }
// }
// let p1 = new Sam("sam",90,"black");
// let p2 = new Sam("vohra",910,"white");
// console.log(p1);
// console.log(p2);


// ------------------------------------------------------------------------------------

// function Sam(naam ,umar, rang){
//     this.name = naam;
//     this.age = umar;
//     this.favColor = rang;
// }
// // fn is accessible in both p1 and p2
// Sam.prototype.fn = function(){
//     console.log("kaju");
// };
// let p1 = new Sam("sam",90,"black");
// let p2 = new Sam("vohra",910,"white");
// console.log(p1,p2);


// -----------------------------------------------------------------------------------------

// class Sam {
//     constructor(naam,umar,rang) {
//         this.name = naam;
//         this.age = umar;
//         this.favColor = rang;
//     }

//     fn() {
//         console.log("kaju");
//     }
// }

// let p1 = new Sam("sam",90,"black");
// let p2 = new Sam("vohra",910,"white");
// console.log(p1,p2);
// console.log(p1.fn(),p2.fn());


// ----------------------------------------------------------------------------------

class Person {
    constructor(naam,umar,email) {
        this.name = naam;
        this.age = umar;
        this.email = email;
    }

    greeting() {
        return `good morning from ${this.name}`;
    }

    level() {
        console.log("lavel sable niklenge");
    }
}

class Students extends Person {
    constructor(naam,umar,email,batch) {
        super(naam,umar,email)  // ordering important call the construction function of person
        this.batch = batch;
    }
    level() {
        console.log("jo end tak mojood rahega");
    }

}        // inheritence

let p1 = new Students("samarth",44,"sam@gmail.com","super150")
let p2 = new Students("nikhil",19,"nikhil@gmail.com")

console.log(p1,p2);

p1.level();