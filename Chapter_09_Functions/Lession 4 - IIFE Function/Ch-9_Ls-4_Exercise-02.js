let greet = ((message) => {
    return `Hello ${message},`;
})("Akshay");

console.log(greet);

//=================================================================

let number = ((a, b) => {
    let answer = a + b;
    return `The answer is ${answer}.`;
})(20, 7);

console.log(number);