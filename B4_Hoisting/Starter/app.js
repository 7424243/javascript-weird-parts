
b(); //still executes
console.log(a); //returns undefined since, at this point in the code, the variable hasn't been defined yet.

//all variables are originally set to undefined and will throw an error once code executes if variable was never defined because it was never put in memory during phase #1.

var a = 'Hello World!';

function b() {
    console.log('Called b!');
}

/**
 * Execution Context:
 * Phase #1: Creation Phase => global object, 'this', outer environment, sets up memory space for variables and functions ("hoisting").
 * Phasee #2: 
 */
