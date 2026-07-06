/*

Looping Statements

Looping statements execute a block of code repeatedly until a condition becomes false.

A) for Loop
Definition

The for loop is used when the number of iterations is known.

Syntax
for(initialization; condition; increment/decrement) {
    // code
}
Example
for(let i = 1; i <= 5; i++) {
    console.log(i);
}
Output
1
2
3
4
5
Explanation
i starts from 1.
The loop continues while i <= 5.
i increases by 1 after every iteration.
B) while Loop
Definition

The while loop executes as long as the specified condition is true.

Syntax
while(condition) {
    // code
}
Example
let i = 1;

while(i <= 5) {
    console.log(i);
    i++;
}
Output
1
2
3
4
5
Explanation

The loop checks the condition before each iteration.

C) do...while Loop
Definition

The do...while loop executes the block of code at least once before checking the condition.

Syntax
do {
    // code
}
while(condition);
Example
let i = 1;

do {
    console.log(i);
    i++;
}
while(i <= 5);
Output
1
2
3
4
5
Explanation

The loop executes first and checks the condition afterward. Therefore, the code runs at least once.

Difference Between while and do...while
while	do...while
Checks condition first	Executes code first
May execute zero times	Executes at least one time


*/