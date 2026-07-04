var a = 5;
a = 7; // Reassigned var


let b = 10;
b = 12; // Reassigned let


const c = 15;
//c = 17; //This will give error. 


function myFunction() {
    let b = 110; // Redeclared and function scope - let
    console.log(`Inside function a = ${a}`);
    console.log(`Inside function b = ${b}`);

    const c = 115; //Redeclared and function scope - const 
    console.log(`Inside function c = ${c}`);
}
myFunction();

console.log();

let lable = "Outside the function ->";
console.log(`${lable} a = ${a}`);
console.log(`${lable} b = ${b}`);
console.log(`${lable} c = ${c}`);
