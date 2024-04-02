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

console.log(typeof id)