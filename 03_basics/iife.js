//Immediately Invoked Function Expression (IIFE)
// IIFE is used to avoid pollution from globle scope and execute function immediately

(function chai(){
   // named IIFE
    console.log(`DB CONNECTED`);
})();

//unnamed or simple IIFE
( (name)=> {
    console.log(`DB CONNNECTED TWO ${name}`);
})('Hemanshi') 

//remember semicolon in between two iife