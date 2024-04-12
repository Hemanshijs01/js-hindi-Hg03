// function sayMyName(){
//     console.log("H");
//     console.log("E");
//     console.log("M");
//     console.log("A");
//     console.log("N");
//     console.log("S");
//     console.log("H");
//     console.log("I");
// }

//sayMyName()

// function addTwoNumbers(number1, number2){

//     let result = number1+ number2
//     return result 
//     return number1+number2
//     console.log(number1+number2);
// }

// addTwoNumbers(3,4)

// //inputs are known as parameters

// //the values we pass during use of function is argument 

// const result = addTwoNumbers(3, 5)

// console.log("result:", result);

function loginUserMessage(username = "sam"){
    if(username===undefined){
        console.log("please entre a username");
        return
    }

    return `${username} just loggerd in`
}

//console.log(loginUserMessage("hemanshi"));
console.log(loginUserMessage());