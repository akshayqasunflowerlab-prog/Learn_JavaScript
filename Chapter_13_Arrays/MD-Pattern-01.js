console.log("Right Triangle Pattern");
console.log("======================");

let n = 8;

for (let i = 0; i < 8; i++) {
    let row = " ";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row.trim());
}