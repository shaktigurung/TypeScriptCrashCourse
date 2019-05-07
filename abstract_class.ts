abstract class People {
    displayData() {
        console.log("Some Data from new class");
    }
}

class Kids extends People {

}
// let newPeople = new People();
//newPeople.displayData();

let kidsPeople = new Kids();
kidsPeople.displayData();
