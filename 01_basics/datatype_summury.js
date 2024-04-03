//# Premitive

// 7 types :string,number, bullen, null, undefined, symbol, BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null 
let useEmail;  //or let use Email = undefined

const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id ===anotherId);

const bigNumber = 3458485121666722158785431n

console.log(typeof bigNumber);

//# Referance type (non premitive) : arrays, objects, functions

const heros = ["x", "y", "z"]
let myobj={
    name: "Hemanshi",
    age: 23,
}

const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myFunction)


//**************************************

// Types of memories:

// 1. stack & 2. Heap

//1.stack => Premitive type
//gets a copy of variable


//2. Heap => referance type(Non-premitive)
//gets refernace of original value

let myYoutubeName = "hemaGusani" //=> string =>premitive => stack

let anotherName =myYoutubeName
anotherName = "HemanshiTilva"

console.log(myYoutubeName)
console.log(anotherName)

let useOne = {
    email: "use@google.com",
    upi: "user@ybl"
}

let userTwo= useOne

userTwo.email = "hemanshi@google.com"

console.log(useOne.email);
console.log(userTwo.email);

