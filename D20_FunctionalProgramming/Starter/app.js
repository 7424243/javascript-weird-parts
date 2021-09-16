function mapForEach(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        );
    };
    return newArr;
}

let arr1 = [1, 2, 3];
console.log(arr1);

// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//     arr2.push(arr1[i] * 2)
// }
let arr2 = mapForEach(arr1, function(item) {
    return item * 2;
})
console.log(arr2); //[2, 4, 6]

let checkPastLimit = function(limiter, item) {
    return item > limiter;
}
let arr3 = mapForEach(arr1, checkPastLimit.bind(this, 1));
console.log(arr3); //[false, true, true]

let checkPastLimitSimplified = (limiter) => {
    return function(limiter, item) {
        return item > limiter;
    }.bind(this, limiter)
}

let arr5 = mapForEach(arr1, checkPastLimitSimplified(2));
console.log(arr5); //[false, false, true]