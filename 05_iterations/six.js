const coding =["js", "java", "py", "cpp", "xyz"]

// const values = coding.forEach((item)=> {
//     console.log(item);
//     return item
// })

// console.log(values);

 const myNums =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=  myNums.filter( (num)=> {
//     return num > 4})

// const newNums = []

// myNums.forEach((num)=> {
//     if (num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);


const books = [
    {title: 'bookOne', gener: 'Fiction', publish: 1986, edition: 1996},

    {title: 'booktwo', gener: 'Fiction', publish: 2002, edition: 2002},

    {title: 'bookthree', gener: 'history', publish: 2001, edition: 2001}
]

const userbooks = books.filter((bk)=> bk.gener==='Fiction' || bk.publish>=2001)



console.log(userbooks);
