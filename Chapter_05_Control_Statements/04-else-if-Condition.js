
let grade = function result(marks) {

    if (marks >= 80 && marks <= 100) {
        return `Grade = A+ (Distinction)`;
    } else if (marks >= 70 && marks < 80) {
        return `Grade = A (First Class)`;
    } else if (marks >= 55 && marks < 70) {
        return `Grade = B (Second Class)`;
    } else if (marks >= 35 && marks < 55) {
        return `Grade = C (Pass Class)`;
    } else if (marks >= 1 && marks < 35) {
        return `Grade = Fail`;
    } else {
        return `Invalid Input`;
    }

}

console.log(grade(101));