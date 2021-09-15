/**
 * Since JavaScript doesn't have namespaces, we can fake it with objects as containers. 
 * This prevents namespace collisions and confusion with the global object.
 */

var greet = 'Hello!';
var greet = 'Hola!'; 

console.log(greet);

let english = {}; //JS namespace
let spanish = {}; //JS namespace

english.greet = 'Hello';
spanish.greet = 'Hola';

console.log(english);
console.log(spanish);