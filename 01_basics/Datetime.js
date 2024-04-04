//Dates

//let myDate = new Date()
//console.log(myDate.toJSON());
//console.log(myDate.toDateString());
//console.log(myDate.toISOString());
//console.log(myDate.toLocaleDateString());
//console.log(myDate.toString());
//console.log(typeof(myDate));

//let myCreatedDate = new Date(2024, 0, 23)
//let myCreatedDate = new Date("2024-01-10")
let myCreatedDate = new Date("05-05-2024")
console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now()

console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now() /1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth())+1;
console.log(newDate.getDay());




