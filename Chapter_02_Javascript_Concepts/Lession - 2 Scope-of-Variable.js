var a = 5;
a = 7;


let b = 10;
b = 12;


const c = 15;
//c = 17;


function myFunction() {
    let b = 110;
    console.log(`myFunction a = ${a}`);
    console.log(`myFunction b = ${b}`);

    const c = 115;
    console.log(`myFunction c = ${c}`);
}
myFunction();
console.log(`a = ${a}`);
console.log("b = ", b);
console.log(`c = ${c}`)
