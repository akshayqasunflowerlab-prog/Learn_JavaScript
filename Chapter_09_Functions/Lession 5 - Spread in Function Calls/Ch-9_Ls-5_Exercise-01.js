let numbers = [35, 10, 20, 15, 20];

function calculation(a, b, c, d, e) {
    let result = a + b + c + d + e;
    return `The total is ${result}.`;
}

console.log(calculation(...numbers));

// let str = new Array[a, b, c, d];
// str.a = "Hi", str.b = "Akshay", str.c = "Good", str.d = "Morning";

// let greetings = function greet(message) {
//     message = a + b + c + d;
//     return `The final message is, ${message}.`;
// }
// console.log(...str);
