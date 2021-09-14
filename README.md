# Misc Information

## Course Material Details

JavaScript: Understanding the Weird Parts (Udemy Course ,Instructor: Anthony Alicea)  

## Vocabulary

* Syntax Parser: a translator program/compiler that reads your code and determines what it does and if it is valid for the computer. If not, it sometimes adds extra stuff before sending to the computer.

* Lexical Environment: where something sits physically in the code is important. The syntax parser really cares about this!

* Execution Context: a wrapper to help manage the code that is currently running/the specific lexical environment that is currently running. It includes the global object/window object, the 'this' object, outer environment, and the code.

* Hoisting: setting memory space for variables and functions within thee first phase of the execution context. When code executes, the memory is pulled from execution context. Variables are originally set to 'undefined'.

* Undefined: an actual value that takes up memory space and is initially set by JavaScript during the creation phase of execution context when memory space is saved for functions and variables. If variable is never assigned by the developer, once the code executes, the variables' value will return undefined. Hint: undefined = 'I never set the value!".
