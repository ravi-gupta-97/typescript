
const firstName: string = "Ravi";
const lastName: string = "Gupta";
const age: number = 26;
const isFresher: boolean = true;
console.log(firstName, lastName, age, isFresher);


const arr: number[] = [];
arr.push(1);
arr.push(3);
arr.push(6);
console.log(arr);


const arr1: string[] = [];
arr1.push("1");
arr1.push("3");
arr1.push("5");
console.log(arr1);


const arr3: (number | string)[] = [];
arr3.push("1");
arr3.push(2);
arr3.push("3");
arr3.push(4);
console.log(arr3);


function printData(x: string | number) {
    console.log(x);
}
printData(3);
printData("3");

function printData1(x: string[] | number) {
    console.log(x);
}
printData1(3);
printData1(["3", "hello"]);


function add(x: number, y: number): number {
    return (x + y);
}
console.log(add(5, 6));


function data(val: { a: number; b: number }) {
    console.log(val.a);
    console.log(val.b);
}
data({ a: 1, b: 2 });


function data2(val: { a: number; b: number }) {
    console.log(val);
}
data2({ a: 1, b: 2 });


function printName(obj: { firstName: string, lastName?: string }) {
    console.log(obj);
}
printName({ firstName: "Ravi" });




