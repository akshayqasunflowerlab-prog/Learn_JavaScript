/*

What is DataTypes?
A data type is a classification that specifies what kind of value a variable can store and what operations can be performed on that value.

Types of Data Types in JavaScript

JavaScript data types are divided into two categories:

1. Primitive Data Types

Primitive data types store single, immutable values.

String: Represents textual data.

let name = "John";

Number: Represents integers and floating-point numbers.

let age = 25;
let price = 99.99;

Boolean: Represents logical values (true or false).

let isStudent = true;

Undefined: A variable that has been declared but not assigned a value.

let x;

Null: Represents an intentional absence of any value.

let data = null;

BigInt: Represents very large integers beyond the Number limit.

let big = 12345678901234567890n;

Symbol: Represents a unique and immutable identifier.

let id = Symbol("id");
2. Non-Primitive (Reference) Data Types

Non-primitive data types can store collections of values or more complex entities.

Object: Stores data as key-value pairs.

let person = {
  name: "John",
  age: 25
};

Array: Stores multiple values in a single variable.

let colors = ["Red", "Green", "Blue"];

Function: A reusable block of code that performs a specific task.

function greet() {
  console.log("Hello");
}
  
String
Number
Boolean
Undefined
Null
BigInt
Symbol

2. Non-primitive 
JavaScript has 1 non-primitive (reference) data type:
Object, which includes objects, arrays, and functions.

*/