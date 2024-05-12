// Controlflow/Logic Control

//to control specific part of code 

//if statement 

if(true){

}
// code inside{} gets executed 

if(false){

} 
//code dosen't gets executed inside{} 
//here, True and false is result of various conditions

// <, >, ==, !=, =<, >=, ===, !== , here === operator checkes value & datatype  

// // Example : 
// const balance = 1000
// //if (balance>600) console.log("test")

// if(balance<500){
//     console.log("less than 500");
// }
// else if(balance <750){
//     console.log("less than 750");
// }
// else if(balance<900){
//     console.log("less than 900");
// }

// else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCrd = true
const loggedInfromEmail = true
const loggedInfromGoogle = false


//to check multiple conditions : will work ifall conditions are correct

if (userLoggedIn&& debitCrd){
    console.log("allowed to buy course !!!");
}

//to check multiple conditions : will work ifall conditions are correct
if (loggedInfromEmail || loggedInfromGoogle){
    console.log("allowed to buy course 2!!!");
}