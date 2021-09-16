function makeGreeting(lang) {
    return function(firstname, lastname) {
        if (lang === 'en') {
            console.log(`Hello ${firstname} ${lastname}`);
        }
        if (lang === 'es') {
            console.log(`Hola ${firstname} ${lastname}`);
        }
    }
}

var greetEnglish = makeGreeting('en')('John', 'Doe'); //returns the accurate console.log: 'Hello John Doe' 
var greetSpanish = makeGreeting('es'); //returns the whole anonymous function
console.log(greetSpanish);



function sayHiLater() {
    let greeting = 'Hi';
    setTimeout(function() {
        console.log(greeting);
    }, 3000); //setTimeout is using the memory space that sayHiLater created so that it has access to 'greeting' variable
}
sayHiLater();