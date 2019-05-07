var automobile = {
    brand: "BMW",
    speed: 200,
    speedMethod: function () {
        console.log("this " + this.brand + " is going at speed of " + this.speed + " miles per hour");
    }
};
//console.log(automobile);
function car1(automobile) {
    console.log("this " + automobile.brand + " is going at speed of " + automobile.speed + " miles per hour");
}
function car2(automobile) {
    console.log("this " + automobile.brand + " is going at speed of " + automobile.speed + " miles per hour");
}
var interfaceTest = {
    brand: "Mercedez",
    speed: 250,
    speedMethod: function () {
    }
};
//Automobile class
var AutoMobileClass = /** @class */ (function () {
    function AutoMobileClass() {
    }
    AutoMobileClass.prototype.speedMethod = function (speed) {
        console.log("Hello my car is going at a speed of " + speed);
    };
    return AutoMobileClass;
}());
// let carobject = new AutoMobileClass();
// carobject.speedMethod(1000);
