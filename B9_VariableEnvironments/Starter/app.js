function b() {
    let myVar;
    console.log(myVar); //returns undefined (third)
}

function a() {
    let myVar = 2;
    console.log(myVar); //returns 2 (second)
    b();
}

//The following lines of code are part of the GLOBAL execution context!
let myVar = 1;
console.log(myVar); //returns 1 (first)
a();
console.log(myVar); //returns 1 (fourth)