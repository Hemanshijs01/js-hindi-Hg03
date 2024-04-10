//objects
//singleton : made with constructor 

//object literals

const mySym = Symbol("Key1")

const JsUser={
    name: "Hemanshi",
    "full name" : "Hemanshi Gusani",
    [mySym] : "myKey1",
    age: 22,
    location: "Rajkot",
    email: "hemanshi@google.com",
    isLoggedIn : false,
    lastLogindays: ["Mon", "Sat"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeofJsUser.mySym);

//Object.freeze(JsUser)

JsUser.email = "vasutilva@chatgpt.in"
//console.log(JsUser["email"]);

JsUser.greetingsOne = function(){
    console.log("Hello Js Users")
}

JsUser.greetingsTwo = function(){
    console.log(`Hello Js Users new, ${this.name}`)
}

console.log(JsUser.greetingsOne());
console.log(JsUser.greetingsTwo());


