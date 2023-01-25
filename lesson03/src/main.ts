let stringArr = ["one", "hey", "three"]
let guiatars = ["one", "hey", 5150]
let mixedData = ["one", true, 5150]

stringArr[0] = "eyyy"
stringArr.push("levo")

guiatars[0] = 1984
guiatars.unshift("jim")

let test = []
let bands: string[] = []
bands.push("van halen")

// tuples
let myTuple: [string, number, boolean] = ["zgr", 42, false]
let mixed = ["John", 1, false]
myTuple[1] = 44

// objects
let myObject: object
myObject = []
console.log(typeof myObject)
myObject = bands
myObject = {}

const exampleObject = {
    prop1: "Dave",
    prop2: false
}

exampleObject.prop1 = "zgR"

type Guitarist = { //interface de kullanılabilir
    name?: string,
    active?: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: "Eddie",
    active: false,
    albums: [1984, 5150, "ororo"]
}

let JP: Guitarist = {
    name: "Kimmy",
    albums: ["I", "II", "IV"]
}
evh = JP

const greetDeneme = (deneme: Guitarist) => {
    if (deneme.name) {
        return `hello ${deneme.name.toUpperCase()}!`
    }
    return "eyyo!"
}
console.log(greetDeneme(evh))

//enums
enum Grade {
    U = 4,
    D,
    C,
    B,
    A,
}
console.log(Grade.U)