let a = 4;

let add = (x) => {
    return x += a;
}
let sub = (x) => {
    return x -= a;
}

let mul = (x) => {
    return x *= a;
}

let div = (x) => {
    return x /= a;
}

console.log(add(25));
console.log(sub(25));
console.log(mul(25));
console.log(div(25));