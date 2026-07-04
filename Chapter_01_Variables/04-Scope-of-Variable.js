console.log("Hello world.");
console.log("Let's learn JavaScript.");

var a = 10;
let b = 20;
const c = 30;

function myFunction() {
    var a = 100;
    let b = 200;
    const c = 300;

    if (true) {
        var a = 1000;
        let b = 2000;
        const c = 3000;

        console.log(`Block scoped ---> a = ${a}, b = ${b}, c = ${c}`);

    }

    console.log(`Function scoped ---> a = ${a}, b = ${b}, c = ${c}`);
}

myFunction();

console.log(`Global variable ---> a = ${a}, b = ${b}, c = ${c}`);