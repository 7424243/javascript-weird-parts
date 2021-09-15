let arr = [
    1, 
    false, 
    { 
        name: 'Tony', 
        address: '111 Main St.' 
    }, 
    function(name) {
        let greeting = 'Hello';
        console.log(`${greeting} ${name}`);
    },
    'hi!'
]; //same as new Array[];

console.log(arr)
arr[3](arr[2].name); //returns Hello Tony

