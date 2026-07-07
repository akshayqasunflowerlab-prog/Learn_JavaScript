console.log("Inverted Right Triangle Pattern");
console.log("================================");
console.log();
let n = 8;

for (let i = 0; i < 8; i++) {
    let row = " ";
    for (let j = 0; j < n - i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}