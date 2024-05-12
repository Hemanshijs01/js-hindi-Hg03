//JAVASCRIPT EXECUTION CONTEXT

// 1st. Global execution context is always available 
// 2nd. function or functional ececution context 
//3rd. Eval execution context

//First is memory creation phase / creation phase
//Second is execution phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum (val1, val2)
let result2 = addNum(10,2)

//Step 1 : Global exection / Global environment : we alocates in to THIS 

//Step 2: Memory phase : We saves or alocates variable (with undefined) value

//Step 3: Execution phase : variables recived there value (and undefined is removed)

//Step 4: new variable environment is created , and Execution thread is created memory phase and execution phase will get executed again for defined function every time we use function and gets deleted at end of execution

//CALL STACK

