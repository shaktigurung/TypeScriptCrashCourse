var myNameSpace;
(function (myNameSpace) {
    myNameSpace.name = "Tahlia is Awesome";
    function displayData() {
        return myNameSpace.name;
    }
    myNameSpace.displayData = displayData;
})(myNameSpace || (myNameSpace = {}));
//Plain javascrit namespace declaration
// var myNameSpace = (function(){
//     return {
//         displayData: function(){
//             console.log("This is my name space");
//         }
//     }
// }) ();
// myNameSpace.displayData();
//TypeScript NameSpace
// namespace myNameSpace {
//     export const name = "maria";
//     export function displayData(){
//         return name;
//     }
// }
// console.log(myNameSpace.displayData());
///<reference path="module1.ts"/>
console.log(myNameSpace.name);
