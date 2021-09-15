let objectLiteral = {
    firsname: 'John',
    isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral)); //returns JSON syntax

let jsonValue = JSON.parse('{ "firstname": "John", "isAProgrammer": true }') //converts JSON to object literal

console.log(jsonValue)