const name = "Sayeel"
const repoCount = 50

// Concating
console.log(name+repoCount+"Value")

// Modern Concating using baktick `` by using string interpolations

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`)

// declaring string another method

const gameName = new String('Sayeel'); // string is a object
console.log(gameName[2])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('S'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(1,3)
console.log(anotherString)

const spaceString = "    sayeel   ";
console.log(spaceString)
console.log(spaceString.trim())

const url = "https://sayeel.com/home/Sayeel%234Abbas"

console.log(url.replace('%234','_'))