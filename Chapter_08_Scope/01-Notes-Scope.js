/**
Q1: What is Scope?
Answer: Scope in JavaScript determines where variables and functions can be accessed. JavaScript supports global, function, and block scope. When a variable is referenced, JavaScript first looks in the current scope, then follows the scope chain through parent scopes until it finds the variable or reaches the global scope. let and const are block-scoped, while var is function-scoped.

Q2: Why Do We Need Scope?
Answer: Without scope, variables would constantly overwrite each other, making programs difficult to understand and maintain.
Scope solves this problem by keeping variables limited to the places where they are needed.

For example, 
imagine that every variable could be accessed from anywhere.
let name = "John";

Then another developer writes:
let name = "Alice";

Which value should JavaScript use?


Q3: What is the benefits of scope?
Answer:
1. Prevents variable name conflicts.
2. Improves security by hiding internal variables.
3. Makes code easier to maintain.
4. Reduces unintended side effects.


Q4: What are the types of scope?
Answer: 
JavaScript has three main scopes:
1. Global Scope
2. Function Scope
3. Block Scope


Q5: What is the difference between function scope and block scope?
Answer: 
Function scope limits variables to a function, while block scope limits variables to the nearest pair of curly braces ({}). var is function-scoped, whereas let and const are block-scoped.
"var" is function-scoped.
For example, 

if (true) {
    var x = 10;
}

console.log(x);

Output:
======
10

"let" and "const" are block-scoped.
For example,

if (true) {
    let x = 10;
}

console.log(x);

Output:
======
ReferenceError

Q6: What is the scope chain?
Answer: 
The scope chain is the mechanism JavaScript uses to resolve variables. It starts searching in the current scope and then moves outward through parent scopes until it reaches the global scope.
When JavaScript needs a variable, it searches in this order:
1. Current Scope
      ↓
2. Parent Scope
      ↓
3. Global Scope

This process is called the scope chain.

For Example:

let country = "India";

function outer() {
    let state = "Gujarat";

    function inner() {
        let city = "Vadodara";

        console.log(city);
        console.log(state);
        console.log(country);
    }

    inner();
}

outer();

Output:
======
Vadodara
Gujarat
India


Q7: What is variable shadowing?
Answer: 
Variable shadowing happens when a variable declared in an inner scope has the same name as a variable in an outer scope, causing the inner variable to take precedence within its scope.
For Example, 

let name = "Rahul";

function student() {

    let name = "Amit";

    console.log(name);
}

student();

console.log(name);

Output:
======
Amit
Rahul

The inner name shadows the global name while inside the function.


Q8: Why should we prefer let over var?
Answer:
1. let follows block scope.
2. var ignores block scope.
3. let reduces accidental bugs.
4. let is the modern choice in JavaScript.

 */