const marvel_heros = ["thor", "spiderman", "Ironman"]
const marvel_dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(marvel_dc_heros)

// console.log(marvel_dc_heros);
// console.log(marvel_heros[3][1]);


//concat
// const allheros = marvel_heros.concat(marvel_dc_heros)
// console.log(allheros);

//spread 

allNewHeros =[...marvel_heros, ...marvel_dc_heros]

//console.log(allNewHeros);

// const anotherArray =[1,2,3,[4,5,6],7,[8,9,[10,11]]]

// const useableArray = anotherArray.flat(Infinity)

// console.log(useableArray);

// Array.log(Array.isArray("Hemanshi")
// console.log(Array.from("Hemanshi"));
// console.log(Array.from({name:"Hemanshi"})); //intresting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));

