/**
 * Coercion: converting a value from one type to another. This can be happening in JavaScript because it is dynamically typed.
 * Operator: a special FUNCTION that is syntactically written differently. Take 2 parameters and return 1 result.
 * Operator Precedence: which operator function gets called first. (highest to lowest) (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
 * Operator Associativity: if same precedence, left to right OR right to left.
 * TypeScript!
 */

/**
 * Coercion
 */
let a;
a = 'not empty';
//if stmts coerce a value to be a boolean!
if (a) {
    console.log('something is there');
}

/**
 * Operators
 */
let b = 3 + 4; //7 is the return value
//       \  /
//      parameters

/**
 * Comparison
 */
let c = 3 > 2 > 1; //returns false, 3 > 2 = true, true > 1 true gets coerced to 1 and 1 is not greater than 1.
