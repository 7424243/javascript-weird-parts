/**
 * Lexical Environment: where something sits physically in the code is important. The syntax parser really cares about this!
 * Execution Context: a wrapper to help manage the code that is currently running. It includes the global object/window object, the 'this' object, outer environment, and the code.
 *      Phase1: Creation => sets the memory
 *      Phase2: Execution => runs code, line by line, using the memory created in Phase1
 *      **Each time a function is invoked, a new execution context is created, for that function!
 * Global Execution Context: the base execution context, when they page initially loads, not inside a function.
 * Hoisting: setting memory space for variables and functions within the phase1 of the execution context. When code executes, the memory is pulled from execution context. Variables are originally set to 'undefined'.
 * Variable Environment: where the variable lives and how it relates to others in memory. Every execution context can have it's own variable environment.
 * Scope: where a variablee is available in your code. Is it the same variable, or a new copy?
 * Name/Value Pair: a name which maps to a unique value in memory.
 * Object: a collection of name/value pairs that sits in memory and can reference other things sitting in memory, such as primitives, objects, or functions.
 */


/**
 * Global Environment
 */
let a = 'Hello World!'; //window.a is still available even though no code is actually being run


/**
 * Hoisting & Execution
 */
c(); //still executes
console.log(b); //returns undefined since, at this point in the code, the variable hasn't been defined yet.

let b = 'Hello World!'; //all variables are originally set to undefined during phase1s and will throw an error once code executes if variable has not been set yet, as it sits lexically in the code.

console.log(b); //returns 'Hello World!' because at this point in the code, the variable has been defined.

function c() {
    console.log('Called c!');
}


/**
 * Variable Environment & Scope
 */
function e() {
    let myVar;
    console.log(myVar); //returns undefined (third)
}

function d() {
    let myVar = 2;
    console.log(myVar); //returns 2 (second)
    e();
}

//The following lines of code are part of the GLOBAL execution context!
let myVar = 1;
console.log(myVar); //returns 1 (first)
d();
console.log(myVar); //returns 1 (fourth)