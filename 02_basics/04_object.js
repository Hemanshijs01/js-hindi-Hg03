//const tinderUser = new Object() //=>singlto object 
const tinderUser = {} //=>non singlto object 


 tinderUser.id = 123;
 tinderUser.name = "sammy";
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email :"some@gmail.com",
    fullname :{
        username:{
            firstname: "Hemanshi",
            lastname: "Gusani"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//console.log(regularUser.fullname.username.firstname);

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// const user ={
//     {
//         id: 1,
//         email: "hr@CanvasGradient.com"
//     };
//     {
//         id: 2,
//         email: "hr2@CanvasGradient.com"
//     };
//     {
//         id: 3,
//         email: "hr3@CanvasGradient.com"
//     }
// }

// console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// video :18 
const course = {
    coursename : "JSin Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const {courseInstructor : instroctor} = course

// console.log(courseInstructor);
console.log(instroctor);

{
    name: "Hema",
    coursenametwo: "Js in engish",
    price: "free"
}