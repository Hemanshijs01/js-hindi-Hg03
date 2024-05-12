//Truthy Value : True, [], "0", 'false', " (space)", (object){}, function(){}

const userEmail =[]
if(userEmail){
    console.log("Got userEmail");
}
else{
    console.log("Don't have user email");
}

const emptyObj = {}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

//if(userEmail.length === 0){
//  console.log("Array is Empty");}
//Falsy values : false, 0, -0, BigInt 0n, "",  null, undefined, NaN

//Nullish Coalescing Operatop (??): Null Undefined : to give some vaule in case we wants to avoid null/undefined valuue and add mim. safety value

// let val1;
// //val1 = 5 ?? 10
// //val1 = null ?? 10
// val1 = undefined ?? 11

// console.log(val1);

//Ternory Operatopr

//syntax=  condition ? true:false

const iceTeaPrice =100

iceTeaPrice <=80? console.log("Less than 80"): console.log("Greater than 80");
