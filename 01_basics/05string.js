const name = "Hemanshi"
const repoCount =50 

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repoCount is ${repoCount} `);

const gameName = new String('hemanshi-HG');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-8,6)
console.log(anotherString);

const newStringOne = "    hemanshi  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/watch?v=fozwNnFunlo&list=PLu71SKxNbfoBuX3f4EOAClehgtRC5Q37&index=11"

console.log(url.replace('hg', '2y-'))

console.log(url.includes('2y-'));

console.log(gameName.split('-'));
