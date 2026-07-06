
let result = function state(age) {
    let aa = "Not Adult";
    if (age >= 18) {
        aa = "Adult";
    }
    return aa;
}

console.log(result(24));