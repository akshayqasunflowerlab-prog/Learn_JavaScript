// Ternary Operators (A shorthand for an if...else statement.)
console.log(`Ternary Operators`);
console.log(`=================`)

let re_status = (age) => {
    return `${age >= 18 ? "Adult" : "Minor"}`;
}

for (i = 17; i < 20; i++) {
    console.log(re_status(i));
}

