(function () {
    console.log(`This is IIFE (Immediately Invoked Function Expression) function.`);
})();

//==============================================================
let cal = (function (a, b) {
    let result = a + b;
    return `Total is ${result}.`;
})(6, 8);

console.log(cal);