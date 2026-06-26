let fruits = Array.of("Apple", "Banana", "Watermelon", "Guava");
console.log(fruits);

let string = Array.from("India");
console.log(string);

let check = fruits.includes("Watermelon");
console.log(check);

fruits.splice(3, 0, "Pineapple", "Mango");
console.log(fruits);


for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let test of fruits) {
    console.log("For.....Of - Loop " + test);
}

fruits.forEach((myfun, index) => {
    console.log(`${index}: ${myfun}`);
})