function greet(whatToSay) {
    return function(name) {
        console.log(`${whatToSay}, ${name}`);
    }
}
//greet('Hi')('Sam');
let sayHi = greet('Hi');
console.log(sayHi)
sayHi('Sam')// Hi, Sam



//---------//
/**
 * var is function scoped (defined throughout program)
 * let is blocked scoped
 * This difference creates 2 very different scenarios below
 */
function buildFunctions() {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

let fs = buildFunctions();
console.log(fs);
fs[0](); //0
fs[1](); //1
fs[2](); //2

//-----------//
//changed let to var
function buildFunctions2() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(
            function() {
                console.log(i);
            }
        )
    }
    return arr;
}

var fs2 = buildFunctions2();
console.log(fs2);
fs2[0](); //3
fs2[1](); //3
fs2[2](); //3

