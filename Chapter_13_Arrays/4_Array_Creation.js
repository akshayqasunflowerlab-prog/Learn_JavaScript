let months = ["January", "February", "March", "April", "May", "June"];
console.log(`Original Array : ${months}`);

let weekdays = new Array('Monday', 'Tuesday', "Wednesday", "Thursday");

months.pop();
console.log("POP (Remove last value from array i.e. June) : " + months);

months.shift();
console.log("SHIFT (Remove first value from array i.e. January)  : " + months);

months.push("July");
months.unshift("December");
console.log("PUSH (July) & UNSHIFT (December) : " + months);

months[0] = "November";
console.log("Update First value in the Array with given month (November) : " + months)
console.log("Check the given value (July) is available in the Array : " + months.includes("July"));

function arraycreation() {
    // 1. Array Literal
    let vegetables = ["Cabbage", "Cauliflower", "Lady's Finger", "Tomato",];
    console.log(`Vegetables : ${vegetables}`);

    // 2. Array Constructor
    let colours = new Array("Red", "Green", "Blue", "White", "Black");
    console.log(`Colours : ${colours}`);

    // 3. Empty Array and Add Elements Later 
    let shapes = [];
    shapes[1] = "Circle";
    shapes[2] = "Square";
    shapes[3] = "Triangle";
    shapes[0] = "Rectangle";
    shapes[4] = "Oval";
    console.log(`Shapes : ${shapes}`);

    // 4. Using Array...of
    let fruits = Array.of("Mango", "Banana", "Apple", "Chickoo");
    console.log(`Fruits : ${fruits}`);

    // 5. Using Array...from
    let mobilenumber = Array.from("8479896954");
    console.log(`Mobile Number : ${mobilenumber}`);
}

arraycreation();

