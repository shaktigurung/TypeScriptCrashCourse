class Tree {

    constructor(public leaf:string) {
        this.leaf = leaf;
    }

    public moveleaf(leaf:string) {
        console.log("Hello Leaf is moving from the branch", `${leaf}`);
    }
}

let newTree = new Tree("green leaf");
newTree.moveleaf("myleaf");