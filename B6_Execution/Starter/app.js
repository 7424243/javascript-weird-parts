/**
 * Execution Context:
 * Phase #1: Creation Phase
 * Phase #2: Execution Phase => runs your code line by line, using the memory created during phase #1
 */

function b() {
    console.log('Called b!');
}

b(); //returns 'Called b!'

console.log(a); //returns undefined (this is what's in memory has 'a' has not been defined by developer yet)

var a = 'Hello World!';

console.log(a); //returns 'Hello World!'

