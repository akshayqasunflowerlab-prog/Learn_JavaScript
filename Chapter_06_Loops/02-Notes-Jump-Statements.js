/*

Jump Statements

Jump statements change the normal flow of program execution.

A) break Statement
Definition

The break statement immediately terminates a loop or a switch statement.

Example
for(let i = 1; i <= 5; i++) {

    if(i == 3) {
        break;
    }

    console.log(i);
}
Output
1
2
Explanation

When i becomes 3, break stops the loop immediately.

B) continue Statement
Definition

The continue statement skips the current iteration and continues with the next iteration of the loop.

Example
for(let i = 1; i <= 5; i++) {

    if(i == 3) {
        continue;
    }

    console.log(i);
}
Output
1
2
4
5
Explanation

When i is 3, that iteration is skipped, and the loop continues with i = 4.

C) return Statement
Definition

The return statement ends the execution of a function and optionally returns a value to the caller.

Syntax
function functionName() {
    return value;
}
Example
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);
Output
30
Explanation
The function calculates a + b.
return sends the result (30) back to the caller.
The returned value is stored in the variable result.
*/