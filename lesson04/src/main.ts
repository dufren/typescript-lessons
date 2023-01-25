//type aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

interface Coder {
    name?: string,
    active: boolean,
    projects: stringOrNumberArray
}

type UserId = stringOrNumber

// literal types
let myName: "zgr"

let userName: "zgr" | "zGr" | "zgR"
userName = "zgR"

// functions
const add = (a: number, b: number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg("eyyoww!")
logMsg(add(2, 3))


let subtract = function (c: number, d: number): number {
    return c - d
}

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//     (a: number, b: number): number
// }

let multiply: mathFunction = (i, j) => {
    return i * j
}

logMsg(multiply(4, 4))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== "undefined") {
        return a + b + c
    }
    return a + b
}

// default param value
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(addAll(4, 2))
logMsg(addAll(4, 2, 22))
logMsg(sumAll(3, 4))

// rest parameters
const total = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 2, 3))

// never type
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
}

const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break // void
    }
}

// custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === "number"
        ? true : false
}
// use of the never type
const numberOrString = (value: number | string): string => {
    if (typeof value === "string") return "string"
    if (isNumber(value)) return "number"
    return createError("this should never happen!")
}