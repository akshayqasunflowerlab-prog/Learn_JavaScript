

let addition = function (a, b) {
    return `${a} + ${b} = ${a + b}`;
}

let subtraction = function (a, b) {
    return `${a} - ${b} = ${a - b}`;
}

let multiplication = function (a, b) {
    return `${a} * ${b} = ${a * b}`;
}

let division = function (a, b) {
    return `${a} / ${b} = ${a / b}`;
}

let modulus = function (a, b) {
    return `${a} % ${b} = ${a % b}`;
}

let power = function (a, b) {
    return `${a} ** ${b} = ${a ** b}`;
}

console.log(`Arithmetic Operators`);
console.log(`=====================`);
console.log(addition(120, 25));
console.log(subtraction(557, 224));
console.log(multiplication(25, 9));
console.log(division(857, 2));
console.log(modulus(97, 2));
console.log(power(2, 6));

//let mul = `Multiplication of 40*200 = ${40 * 200}`;
//console.log(mul);