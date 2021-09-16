let person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function() {
        return `Hi, ${this.firstname}`;
    }
}

let john = Object.create(person); // creates an empty object whose prototype points at person
john.firstname = 'John'; //adds property to john object
john.lastname = 'Doe'; //adds property to john object
console.log(john);