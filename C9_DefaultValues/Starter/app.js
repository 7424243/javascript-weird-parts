function greet(name) {
    name = name || '<default value>' // '||' returns the 1st value that can be coerced to true
    console.log('Hello ' + name);//+ operator coerced name to be a string
}
greet('Sam')//Hello Sam
greet()//Hello undefined