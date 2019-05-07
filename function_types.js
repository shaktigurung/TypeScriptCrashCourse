function stringFunction() {
    console.log("Hello I am a string");
}
function call(val1, val2) {
    var total = val1 + val2;
    return total;
}
var universal = call;
console.log("this is function type", universal(2, 2));
