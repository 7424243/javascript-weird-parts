function Person(firstname, lastname) {
 
    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    console.log('This function is invoked.');
    
}

Person.prototype.getFullName = function() {
    return this.firstname + ' ' + this.lastname;
}// add getFullName method to the prototype object.
//its better to put methods on the prototype because we only need one, not one for each person.

var john = new Person('John', 'Doe');
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);