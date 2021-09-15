/**
 * '[]' and '.' are just operators/functions that access a specific reference in memory.
 */

let person = new Object(); //creates a new object that sits in memory

//person['firstname'] = 'Sam'; //creates this spot in memory
person.firstname = 'Sam'
//person['lastname'] = 'Smith';
person.lastname = 'Smith'

let firstNameProperty = 'firstname';

console.log(person);
console.log(person.firstname);

person.address = new Object();
person.address.street = '11 Main St.';
person.address.city = 'New York';
person.address.state = 'New York';

console.log(person)