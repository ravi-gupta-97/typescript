// type alias
type person = {
    firstName: string,
    lastName: string,
    age: number
}
function printData2(detail: person) {
    console.log(detail.firstName, detail.lastName, detail.age);
}
printData2({ firstName: "Ravi", lastName: "Gupta", age: 26 });


// interface
interface point {
    x: number,
    y: number
}

interface point {
    z?: number
}
function printPoints(pt: point): void {
    console.log(pt.x, pt.y, pt.z);
}
printPoints({ x: 3, y: 4, z: 5 });



// interface extends 
interface someOtherPoints extends point {
    a: number
}

function allPoints(pt: someOtherPoints) {
    console.log(pt.x, pt.y, pt.a);
}
allPoints({ x: 1, y: 3, a: 6 });


