greet();

function greet() {
    console.log('hi');
} //function statement - gets put into memory

//anonymousGreet() //this wouldn't work because anonymousGreet is initially placed in memory as undefined and at this point, lexically, we haven't declared a value for it yet.

let anonymousGreet = function() {
    console.log('hi');
} //function expression because anonymousGreet RETURNS a function object
//anonymousGreet is a variable so it gets put into memory as undefined until it is redeclared


console.log(anonymousGreet) //returns a object/function
anonymousGreet(); //invokes the code within the object/function


//--------//


function log(a) {
    console.log(a) //logs the anonymous function
    a();//invokes the function that has been passed in
}
log(function() {
    console.log('hi')
})//created on the fly and acts like an object literal, because it is an object