function displayData<TYPE> (someData: TYPE) {
    return someData;
}

console.log(displayData("Hello string parameter"));
console.log(displayData(42));
console.log(displayData(false));