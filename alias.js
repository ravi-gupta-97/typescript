function printData2(detail) {
    console.log(detail.firstName, detail.lastName, detail.age);
}
printData2({ firstName: "Ravi", lastName: "Gupta", age: 26 });
function printPoints(pt) {
    console.log(pt.x, pt.y, pt.z);
}
printPoints({ x: 3, y: 4, z: 5 });
function allPoints(pt) {
    console.log(pt.x, pt.y, pt.a);
}
allPoints({ x: 1, y: 3, a: 6 });
