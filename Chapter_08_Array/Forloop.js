// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 == !0) {
//         console.log(i);
//     }
// }

function myfun() {
    let answer = 0;
    for (let i = 1; i <= 10; i++) {
        answer = i + answer;
    }
    console.log(answer);
}
myfun()