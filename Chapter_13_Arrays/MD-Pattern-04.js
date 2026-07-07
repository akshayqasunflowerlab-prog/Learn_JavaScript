console.log("Inverted Left Triangle Pattern");
console.log("===============================");
console.log();

let n = 8;

for (let i = 1; i <= n; i++) {
    let row = "";

    // Print spaces
    for (let j = 1; j < i; j++) {
        row += "  ";
    }

    // Print stars
    for (let k = 1; k <= n - i + 1; k++) {
        row += " *";
    }

    console.log(row);
}