class objectGenericClass <TYPE1, TYPE2> {

    constructor( public value1: TYPE1, public value2: TYPE2) {

    }
}

let object1 = new objectGenericClass<string, number> ("Hello", 2);
let object2 = new objectGenericClass<boolean, number> (false, 4);