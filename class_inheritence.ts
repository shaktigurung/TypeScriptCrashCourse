class Building {
    public windows: string;
    escalators() {
        console.log('The escalators is moving');
    }

}

// const building = new Building;
// building.escalators();

class Building2 extends Building {

    escalators() {
        console.log('The escalators is moving from building 2');
    }
}

const building2 = new Building2;
building2.escalators();