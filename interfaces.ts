interface AutomobileInterface {
    brand?: string; // ? mark makes the variable optional
    speed?: number;
    speedMethod(velocidad: number): void;
}

const automobile: AutomobileInterface = {
    brand: "BMW",
    speed: 200,
    speedMethod() {
        console.log(`this ${this.brand} is going at speed of ${this.speed} miles per hour`)
    }
}

//console.log(automobile);

function car1(automobile: AutomobileInterface ) {
    console.log(`this ${automobile.brand} is going at speed of ${automobile.speed} miles per hour`)
}

function car2 (automobile: AutomobileInterface) {
    console.log(`this ${automobile.brand} is going at speed of ${automobile.speed} miles per hour`)
}
const interfaceTest = {
    brand: "Mercedez",
    speed: 250,
    speedMethod() {
    }
}
//car2(interfaceTest);

// Inheritance 
interface AutomobileInterface2 extends AutomobileInterface {
    brand: string; 
    speed: number;
}

//Automobile class

class AutoMobileClass implements AutomobileInterface {
    brand: string;
    speed: number;

    speedMethod(speed){
        console.log(`Hello my car is going at a speed of ${speed}`);
    }  

}

// let carobject = new AutoMobileClass();
// carobject.speedMethod(1000);


