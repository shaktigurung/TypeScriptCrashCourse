function stringFunction() {
    console.log("Hello I am a string");
}

function call(val1:number, val2:number): number {
    let total:number = val1 + val2;
    return total;
}

let universal = call;

console.log("this is function type", universal(2,2));