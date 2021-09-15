/**
 * by value (primitives)
 */
let a = 3;
let b;

b = a; //b will be 3 and a will be 3, a copy in two different points in memory
//if b or a is changed later on, it will just change that space in memory
console.log(b); //logs 3
console.log(a); //logs 3
b = 5;
console.log(b) //logs 5
console.log(a); //logs 3


/**
 * by reference (objects)
 */
let c = { greeting: 'hi' };
let d;

d = c; //points d at the same location in memory that c points to.
//mutating c, also changes d
console.log(d); //logs {greeting: 'hi'}
console.log(c); //logs {greeting: 'hi'}
c.greeting = 'hey';
console.log(d); //logs {greeting: 'hey'}
console.log(c); //logs {greeting: 'hey'}

/**
 * by reference (even as parameters)
 */
function changeGreeting(obj) {
    obj.greeting = 'Hola';
}

changeGreeting(d);
console.log(c); // logs {greeting: 'Hola'}
console.log(d); // logs {greeting: 'Hola'}

/**
 * equals operator sets up new memory space (new address)
 */
c = { greeting: 'howdy'}; //this doesn't exist as of yet, so it creates it on the fly
console.log(c); // logs {greeting: 'Howdy'}
console.log(d); // logs {greeting: 'Hola'}


