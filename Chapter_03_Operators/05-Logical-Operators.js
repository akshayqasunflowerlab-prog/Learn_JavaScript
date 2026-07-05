let result = (marks) => {

    if (marks >= 80 && marks <= 100) {
        return `Grade = A+`;
    } else if (marks < 80 && marks >= 70) {
        return `Grade = A`;
    } else if (marks < 70 && marks >= 50) {
        return `Grade = B`;
    } else if (marks < 50 && marks >= 35) {
        return `Grade = C`;
    } else if (marks < 35 && marks > 0) {
        return `Grade = Fail`;
    } else if (marks <= 0 || marks > 100) {
        return `Invalid input`
    };

}

console.log(result(101));

