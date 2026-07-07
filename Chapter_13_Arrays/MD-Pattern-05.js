console.log("Left Triangle Pattern");
console.log("======================");
console.log();

let n = 8;

for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }

    // Print stars
    for (let k = 1; k <= i; k++) {
        row += " *";
    }

    console.log(row);
}