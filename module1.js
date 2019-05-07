var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Tahlia is Awesome";
    function displayData() {
        return myNameSpace.name;
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
