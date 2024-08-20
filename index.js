var firstName = "Ravi";
var lastName = "Gupta";
var age = 26;
var isFresher = true;
console.log(firstName, lastName, age, isFresher);
var arr = [];
arr.push(1);
arr.push(3);
arr.push(5);
console.log(arr);
var arr1 = [];
arr1.push("1");
arr1.push("3");
arr1.push("5");
console.log(arr1);
var arr3 = [];
arr3.push("1");
arr3.push(2);
arr3.push("3");
arr3.push(4);
console.log(arr3);
function printData(x) {
    console.log(x);
}
printData(3);
printData("3");
function add(x, y) {
    return (x + y);
}
console.log(add(5, 6));
function data(val) {
    console.log(val.a);
    console.log(val.b);
}
data({ a: 1, b: 2 });
function data2(val) {
    console.log(val);
}
data2({ a: 1, b: 2 });
function printName(obj) {
    console.log(obj);
}
printName({ firstName: "Ravi" });
