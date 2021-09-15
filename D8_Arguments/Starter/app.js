function greet(firstname, lastname, language) {//you can set up default parameters to hoist that instead of undefined
    if (arguments.length === 0) {//arguments keyword has beeen replaced with spread opterator (...)
        console.log('Missing parameters!');
        return;
    }
    
    console.log(firstname);
    console.log(lastname);
    console.log(language);
    console.log(arguments);
}

greet(); //all logs show undefined, but NOT an error, because of hoisting
greet('John');// logs John, undefined, undefined
greet('John', 'Doe'); //logs John, Doe, undefined
greet('John', 'Doe', 'ES'); //logs John, Doe, ES