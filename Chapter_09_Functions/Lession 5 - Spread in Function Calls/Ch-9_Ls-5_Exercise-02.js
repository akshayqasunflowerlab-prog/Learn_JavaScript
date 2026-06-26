let numbers = [75, 11, 55, 79];
let formula = (a, b, c, d) => {
    let result = a + b + c + d;
    return `The result is ${result}.`;
}
console.log(formula(...numbers));

//=================================================================
let numbers1 = [44, 11, 64, 88];

const sum = (...nums) => {
    const result = nums.reduce((total, n) => total + n, 0);
    return `The result is ${result}.`;
};

console.log(sum(...numbers1));