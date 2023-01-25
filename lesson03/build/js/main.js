"use strict";
let stringArr = ["one", "hey", "three"];
let guiatars = ["one", "hey", 5150];
let mixedData = ["one", true, 5150];
stringArr[0] = "eyyy";
stringArr.push("levo");
guiatars[0] = 1984;
guiatars.unshift("jim");
let test = [];
let bands = [];
bands.push("van halen");
// tuples
let myTuple = ["zgr", 42, false];
let mixed = ["John", 1, false];
myTuple[1] = 44;
// objects
let myObject;
myObject = [];
console.log(typeof myObject);
myObject = bands;
myObject = {};
const exampleObject = {
    prop1: "Dave",
    prop2: false
};
exampleObject.prop1 = "zgR";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "ororo"]
};
let JP = {
    name: "Kimmy",
    albums: ["I", "II", "IV"]
};
evh = JP;
const greetDeneme = (deneme) => {
    if (deneme.name) {
        return `hello ${deneme.name.toUpperCase()}!`;
    }
    return "eyyo!";
};
console.log(greetDeneme(evh));
//enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 4] = "U";
    Grade[Grade["D"] = 5] = "D";
    Grade[Grade["C"] = 6] = "C";
    Grade[Grade["B"] = 7] = "B";
    Grade[Grade["A"] = 8] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
