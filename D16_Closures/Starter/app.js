function greet(whatToSay) {
    return function(name) {
        console.log(`${whatToSay}, ${name}`);
    }
}
//greet('Hi')('Sam');
let sayHi = greet('Hi');
console.log(sayHi)
sayHi('Sam')// Hi, Sam