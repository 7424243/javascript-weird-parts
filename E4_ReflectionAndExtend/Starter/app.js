var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + ' ' + this.lastname;  
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// don't do this EVER! for demo purposes only!!!
john.__proto__ = person;

// reflection
for (let prop in john) {
    if (john.hasOwnProperty(prop)) {
        console.log(`${prop}: ${john[prop]}`)
    }
}
//.hasOwnProperty() means we are looking for only properties on the john object

// extend: places properties onto the other object(s)
let jane = {
    address: '111 Main St.',
    getFormalFullName: function() {
        return this.lastname + ', ' + this.firstname;
    }
}
let jim = {
    getFirstName: function() {
        return firstname;
    }
}
_.extend(john, jane, jim); //see underscore library for code for extend function
console.log(john);








