/*

What is Control Statements?
A Control Statement in JavaScript controls the flow of program execution. It allows the program to make decisions, repeat tasks, or jump to different parts of the code.

Control statements are mainly divided into three categories:

Conditional Statements – Used to make decisions.
Looping Statements – Used to execute a block of code repeatedly.
Jump Statements – Used to change the normal flow of execution.
1. Conditional Statements

Conditional statements execute different blocks of code depending on whether a condition is true or false.

A) if Statement
Definition

The if statement executes a block of code only if the specified condition is true.

Syntax
if (condition) {
    // code to execute
}
Example
let marks = 75;

if (marks >= 35) {
    console.log("You Passed");
}
Output
You Passed
Explanation
The condition marks >= 35 is true.
Therefore, the code inside the if block is executed.
B) if...else Statement
Definition

The if...else statement executes one block of code if the condition is true and another block if the condition is false.

Syntax
if (condition) {
    // executes if condition is true
}
else {
    // executes if condition is false
}
Example
let age = 16;

if (age >= 18) {
    console.log("Eligible to Vote");
}
else {
    console.log("Not Eligible to Vote");
}
Output
Not Eligible to Vote
Explanation

Since age is less than 18, the else block is executed.

C) else if Statement
Definition

The else if statement is used when multiple conditions need to be checked one after another.

Syntax
if (condition1) {

}
else if (condition2) {

}
else {

}
Example
let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}
Output
Grade B
Explanation
First condition is false.
Second condition is true.
Therefore, "Grade B" is printed.
D) switch Statement
Definition

The switch statement is used to choose one block of code from multiple options.

Syntax
switch(expression) {
    case value1:
        // code
        break;

    case value2:
        // code
        break;

    default:
        // default code
}
Example
let day = 3;

switch(day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}
Output
Wednesday
Explanation

The value of day is 3, so case 3 executes.


| **Statement**    | **Purpose**                                                                                                                                                                                                       | **When to Use**                                                                                         | **Example**                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **`if`**         | Executes a block of code only when the specified condition is **true**. If the condition is false, the code inside the `if` block is skipped.                                                                     | Use when you need to check **one condition**.                                                           | Check if a student has passed, verify if a user is logged in, or determine if a number is positive.         |
| **`if...else`**  | Executes one block of code if the condition is **true**, otherwise executes another block if the condition is **false**.                                                                                          | Use when there are **only two possible outcomes**.                                                      | Pass/Fail, Eligible/Not Eligible, Even/Odd number.                                                          |
| **`else if`**    | Tests **multiple conditions** one after another. The first condition that evaluates to **true** is executed, and the remaining conditions are skipped. If none are true, the `else` block executes (if provided). | Use when there are **more than two possible outcomes**.                                                 | Assign grades (A, B, C, D), determine salary ranges, categorize age groups.                                 |
| **`switch`**     | Selects one block of code from **multiple predefined options** based on the value of an expression. It is often easier to read than many `else if` statements when comparing the same variable.                   | Use when checking **one variable against many fixed values**.                                           | Display day names, month names, menu options, calculator operations.                                        |
| **`for`**        | Repeats a block of code a specific number of times. It includes initialization, condition, and update in one statement.                                                                                           | Use when you **know the number of iterations** in advance.                                              | Print numbers 1–10, display array elements, generate multiplication tables.                                 |
| **`while`**      | Repeats a block of code **as long as the condition is true**. The condition is checked before each iteration, so the loop may execute zero times.                                                                 | Use when the **number of iterations is unknown** and depends on a condition.                            | Continue reading user input until valid data is entered, process data until a condition changes.            |
| **`do...while`** | Similar to `while`, but executes the code **at least once** before checking the condition.                                                                                                                        | Use when the code **must run at least one time**, regardless of the condition.                          | Menu-driven programs, asking the user to enter data at least once.                                          |
| **`break`**      | Immediately **terminates** the current loop or `switch` statement and transfers control to the next statement after it.                                                                                           | Use when you need to **stop execution early** after finding the required result or meeting a condition. | Stop searching once an item is found, exit a loop when the user enters a specific value.                    |
| **`continue`**   | Skips the **current iteration** of a loop and moves directly to the next iteration without stopping the loop.                                                                                                     | Use when you want to **ignore certain values** but continue processing the remaining iterations.        | Skip negative numbers, ignore even numbers, skip invalid records.                                           |
| **`return`**     | Ends the execution of a **function** and optionally sends a value back to the function caller. No code after `return` in the same function is executed.                                                           | Use when a function needs to **produce a result** or stop executing.                                    | Return the sum of two numbers, return `true` or `false` after validation, return an object from a function. |

*/