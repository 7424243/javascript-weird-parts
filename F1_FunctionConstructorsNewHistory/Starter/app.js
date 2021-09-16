function Person() {
    console.log(this);
    this.firstname = 'John';
    this.lastname = 'Doe';
    console.log(this);
}// Function Constructor

let john = new Person(); // 'new' keyword is actually an operator, thus changing the 'this' object
console.log(john); //Person {firstname: 'John', lastname: 'Doe'} 