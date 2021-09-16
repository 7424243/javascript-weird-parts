let person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
        let fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

let logName = function(lang1, lang2) {
    console.log(`Logged: ${this.getFullName()}`);
}
let logPersonName = logName.bind(person);//binds the 'this' object with person
logPersonName();

logName.call(person, 'en', 'es');//the 'this' keyword points to person

logName.apply(person, ['en', 'es']);//similar to .call() but needs an array of the arguments

// function borrowing:
let person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
}
console.log(person.getFullName.apply(person2));

// function currying
function multiply(a, b) {
    return a*b;
}

let multiplyByTwo = multiply.bind(this, 2); //permanently setting a = 2 for this copy of the function
console.log(multiplyByTwo(4)); //8