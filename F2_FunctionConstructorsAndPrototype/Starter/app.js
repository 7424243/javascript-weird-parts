// function Person(firstname, lastname) {
 
//     console.log(this);
//     this.firstname = firstname;
//     this.lastname = lastname;
//     console.log('This function is invoked.');
    
// }// function constructors should start with a capital letter

// Person.prototype.getFullName = function() {
//     return this.firstname + ' ' + this.lastname;
// }// add getFullName method to the prototype object.
// //its better to put methods on the prototype because we only need one, not one for each person.

// var john = new Person('John', 'Doe');
// console.log(john);

// var jane = new Person('Jane', 'Doe');
// console.log(jane);

//Class
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet() {
        return `Hi, ${this.firstname}`;
    }
}
console.log(new Person); //Person {firstname: undefined, lastname: undefined}

//Classes and Prototype
//'extends' keyword sets the prototype that the class is inheriting.
//'super' within the constructor is accessing the parent class properties.
class InformalPerson extends Person {
    constructor(firstname, lastname) {
        super(firstname, lastname);
    }
    greet() {
        return `Yo, ${this.firstname}`;
    }
}
console.log(new Person('Sam', 'Smith')); //Person {firstname: 'Sam', lastname: 'Smith'}