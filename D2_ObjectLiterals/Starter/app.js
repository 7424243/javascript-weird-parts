let person = { 
    firstname: 'Sam', 
    lastname: 'Smith',
    address: {
        street: '11 Main St.',
        city: 'New York',
        state: 'New York'
    } 
} //replaces new Object() and you can initialize at the same time 

function greet(person) {
    console.log(`Hi ${person.firstname}`)
}

greet(person)
greet({firstname: 'Jane', lastname: 'Doe' })//use object literal sytnax to create an object at the momen of execution

console.log(person)