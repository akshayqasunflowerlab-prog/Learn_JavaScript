/*

What is Variable?
A variable is a named container used to store data in memory. You can store values such as numbers, text, or objects in a variable and use them later in your program.

In JavaScript, there are 3 ways to declare a variable:

1. var (Older way)
Can be reassigned.
Can be redeclared.
Function-scoped.
Not recommended for modern JavaScript.

2. let (Modern way)
Can be reassigned.
Cannot be redeclared in the same scope.
Block-scoped.
Recommended when the value may change.

3. const (Modern way)
Cannot be reassigned after initialization.
Cannot be redeclared.
Block-scoped.
Recommended for values that should not change.

Summary Table:

| Keyword | Reassign  | Redeclare | Scope    |
| ------- | --------- | --------- | -------- |
| `var`   | ✅ Yes    | ✅ Yes   | Function |
| `let`   | ✅ Yes    | ❌ No    | Block    |
| `const` | ❌ No     | ❌ No    | Block    |

| Rule                                         | Description                                                                                                           | ✅ Good Example                                        | ❌ Bad Example                            |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| **Start with a letter, `_`, or `$`**         | A variable name must begin with an alphabet (`a-z`, `A-Z`), an underscore (`_`), or a dollar sign (`$`).              | `userName`, `_count`, `$price`                        | `1user`, `2025Year`                      |
| **Can contain numbers**                      | Numbers are allowed, but only after the first character.                                                              | `user1`, `version2`                                   | `1user`                                  |
| **Use only letters, numbers, `_`, and `$`**  | Variable names can include alphabets, digits, underscores, and dollar signs. No other special characters are allowed. | `first_name`, `$total`, `_id`                         | `user-name`, `user@name`, `price#`       |
| **No spaces**                                | Variable names cannot contain spaces between words. Use camelCase or underscores instead.                             | `firstName`, `first_name`                             | `first name`                             |
| **Case-sensitive**                           | JavaScript treats uppercase and lowercase letters as different characters.                                            | `user`, `User`, `USER` are three different variables. | Assuming `user` and `User` are the same. |
| **Don't use reserved keywords**              | Keywords that have special meaning in JavaScript cannot be used as variable names.                                    | `userClass`, `studentIf`                              | `class`, `if`, `return`, `function`      |
| **Use meaningful names**                     | Choose names that clearly describe the data stored in the variable.                                                   | `studentAge`, `totalPrice`                            | `x`, `a`, `temp1`                        |
| **Follow camelCase**                         | Use camelCase for variables containing multiple words. This is the standard JavaScript naming convention.             | `firstName`, `totalAmount`, `isLoggedIn`              | `first_name`, `FIRST_NAME`, `firstname`  |
| **Use descriptive names for booleans**       | Boolean variables should read like questions and usually start with `is`, `has`, `can`, or `should`.                  | `isActive`, `hasPermission`, `canEdit`                | `active`, `permission`, `edit`           |
| **Use plural names for arrays**              | Since arrays store multiple values, their names should be plural.                                                     | `users`, `products`, `colors`                         | `user`, `product`                        |
| **Use singular names for objects**           | Objects usually represent a single entity, so use singular names.                                                     | `user`, `employee`, `product`                         | `users`, `employees`                     |
| **Use UPPER_SNAKE_CASE for fixed constants** | Constants representing fixed values are commonly written in uppercase with underscores.                               | `PI`, `MAX_USERS`, `API_URL`                          | `pi`, `maxUsers` (for fixed constants)   |
| **Avoid built-in object names**              | Don't use the names of JavaScript's built-in objects as variables to prevent confusion and bugs.                      | `userArray`, `personObject`                           | `Array`, `Object`, `String`, `Date`      |

*/