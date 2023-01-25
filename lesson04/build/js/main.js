"use strict";
// literal types
let myName;
let userName;
userName = "zgR";
// functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("eyyoww!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
// interface mathFunction {
//     (a: number, b: number): number
// }
let multiply = (i, j) => {
    return i * j;
};
logMsg(multiply(4, 4));
// optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== "undefined") {
        return a + b + c;
    }
    return a + b;
};
// default param value
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(4, 2));
logMsg(addAll(4, 2, 22));
logMsg(sumAll(3, 4));
// rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 2, 3));
// never type
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break; // void
    }
};
// custom type guard
const isNumber = (value) => {
    return typeof value === "number"
        ? true : false;
};
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    if (isNumber(value))
        return "number";
    return createError("this should never happen!");
};
