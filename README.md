# Misc Information

## Course Material Details

JavaScript: Understanding the Weird Parts (Udemy Course, Instructor: Anthony Alicea)  

## Vocabulary

* Syntax Parser: a translator program/compiler that reads your code and determines what it does and if it is valid for the computer. If not, it sometimes adds extra stuff before sending to the computer.

* Lexical Environment: where something sits physically in the code is important. The syntax parser really cares about this!

* Execution Context: a wrapper to help manage the code that is currently running/the specific lexical environment that is currently running. It includes the global object/window object, the 'this' object, outer environment, and the code.

* Hoisting: setting memory space for variables and functions within thee first phase of the execution context. When code executes, the memory is pulled from execution context. Variables are originally set to 'undefined'.

* Undefined: an actual value that takes up memory space and is initially set by JavaScript during the creation phase of execution context when memory space is saved for functions and variables. If variable is never assigned by the developer, once the code executes, the variables' value will return undefined. Hint: undefined = 'I never set the value!".

* Single Threaded: one command is being executeed at a time.

* Synchronous: one at a time, in order.

* Invocation: running/calling a function.

* Variable Environment: where the variable lives and how it relates to other in memory. Every execution context can have it's own variable environment.

* Scope: where a variablee is availablee in your code. Is it the same variable, or a new copy?

* Asynchronous: morre ethan one at a time. JavaScript holds multiple events in an event queue until it is ready to synchronously carry out the events.

* Operator: a special function that is written differently. Takes 2 parameters and returns 1 result. (Ex: 3 + 4, '+' is function +(3, 4) under the hood)

* Coercion: converting a value from one type to another. This can be happening in JavaScript because it is dynamically typed.

* Operator Precedence: which operator function gets called first. (highest to lowest) ![Mozilla Operator Precedence Table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

* Operator Associativity: if same precedence, left to right OR right to left.

* Namespace: a container for variables and functions. JavaScript doesn't have these, explicity, so we fake it with objects.

* First Class Functions: everything you can do with other types you can do with functions - assign them variables, pass them around, create them on the fly. They can have primitives, objects, and functions on them, just like objects, but they also have a name (optional) and the invocable code.

* Expression: a unit of code that results in a value - a value is returned.

* Statement: just does work.

* Whitespace: invisible characters that create literal 'space' in your written code (returns, spaces, tabs).

* Closure: a JavaScrript feature wherrer a function is bundled together with references to its surrounding lexical environment. Gives access to outer function's scope from an inner function. Created everrytime a function is created.

* Callback: a function you give to another function, as a parameter, to be run when the other function is finished.

* Function Currying: creating a copy of a function but with some preset parameters. (Using .bind())

* Inheritance: one object gets access to the properties and methods of another object. Classical vs. Prototypal.

* Reflection: an object can look at itself, listing and changing its properties and methods.

* Function Constructors: a normal function that is used to construct objects.
