// function sam() {}

// let out = sam();
// console.log(out); // undefined

// ----------------------------------------------

// constructor function 
function Sam() {
    this.name = "kaju";
    this.age = 2;
}

let out = new Sam();
console.log(out);  // sam {}
// console.log(out.name);


// role of constructor function is to return a new objext
// classes: they are the syntectical sugar of constructer function.role is to create an object
// super: constructor is run of the upper class from which it is extended
// polyfill creation: whenever we created a own method and throwing it to its prototype 

//  call apply bind, arrow function