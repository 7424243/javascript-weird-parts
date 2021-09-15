function greet(name) {
    console.log(`Hello ${name}`);
}//function statment
greet();

let greetFunc = function(name) {
    console.log(`Hello ${name}`);
};//function expression
greetFunc();

let greeting = function(name) {
    console.log(`Hello ${name}`);
}();//invoke the function at the point where it is created. IIFE



(function(name) {
    console.log(name);
})('Sam');//wrap function statement in parenthesis to create a function expression