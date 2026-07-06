/*

What is Type Conversion?
Type Conversion in JavaScript is the process of changing a value from one data type to another, such as converting a string to a number or a number to a string.

There are two types of type conversion:
1. Implicit Type Conversion (Coercion) – JavaScript automatically converts the data type.
2. Explicit Type Conversion – The programmer manually converts the data type using built-in functions.

1. Implicit Type Conversion - JavaScript automatically converts types when needed.

Example:

let result = "10" + 5;
console.log(result); // "105" (Number is converted to String)

let sum = "10" - 5;
console.log(sum); // 5 (String is converted to Number)


2. Explicit Type Conversion - The programmer converts the data type using functions like Number(), String(), or Boolean().

Example:

let str = "123";
let num = Number(str);

console.log(num);        // 123
console.log(typeof num); // "number"

Another example:

let age = 25;
let text = String(age);

console.log(text);        // "25"
console.log(typeof text); // "string"

*/