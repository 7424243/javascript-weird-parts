/**
 * Even w/o code, the 'this'/window object is available if file is run thru the browser (see console).
 * Global Object/window object = 'this'.
 * When JS code is executed, an execution context (a wrapper) is created => includes global object, 'this' object, outer environment and your code.
 * 
 */

let a = 'Hello World!'; //window.a

function b() {} //window.b