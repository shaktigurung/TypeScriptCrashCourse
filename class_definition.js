var Tree = /** @class */ (function () {
    function Tree(leaf) {
        this.leaf = leaf;
        this.leaf = leaf;
    }
    Tree.prototype.moveleaf = function (leaf) {
        console.log("Hello Leaf is moving from the branch", "" + leaf);
    };
    return Tree;
}());
var newTree = new Tree("green leaf");
newTree.moveleaf("myleaf");
