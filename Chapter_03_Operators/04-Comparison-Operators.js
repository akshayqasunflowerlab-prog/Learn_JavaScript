let a = "15";

let loos_Equal = (x) => {
    return `loos_Equal - ${x} == ${a} -> ${x == a}`;
}
console.log(loos_Equal(15));


let strict_Equal = (x) => {
    return `strict_Equal - ${x} === ${a} -> ${x === a}`;
}
console.log(strict_Equal(15))


let loos_Notequal = (x) => {
    return `loos_Notequal - ${x} != ${a} -> ${x != a}`;
}
console.log(loos_Notequal(15))


let strict_Notequal = (x) => {
    return `strict_Notequal - ${x} !== ${a} -> ${x !== a}`;
}
console.log(strict_Notequal(15));


let less_Than = (x) => {
    return `less_Than - ${x} < ${a} -> ${x < a}`;
}
console.log(less_Than(15));


let greater_Than = (x) => {
    return `greater_Than - ${x} > ${a} -> ${x > a}`;
}
console.log(greater_Than(15));


let lessthan_Equal = (x) => {
    return `lessthan_Equal - ${x} <= ${a} -> ${x <= a}`;
}
console.log(lessthan_Equal(15))


let greaterthan_Equal = (x) => {
    return `greaterthan_Equal - ${x} >= ${a} -> ${x >= a}`;
}
console.log(greaterthan_Equal(15));



