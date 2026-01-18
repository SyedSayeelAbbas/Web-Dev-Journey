const score = 5060;
console.log(score)

const balance = new Number(100);
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(1))

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-PK'));

// +++++++++++++++++++ Maths +++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-2)); // 2
// console.log(Math.round(4.2)) // 4
// console.log(Math.ceil(4.2)) // 5
// console.log(Math.floor(4.2)) // 4
// console.log(Math.max(2,4,6,1,0)) // 6

console.log(Math.random()) // value will between 0 to 1
// customize Math.random
console.log((Math.random()*10)+1) // mutiply to which max value can go

const min = 10;
const max = 20;
console.log(Math.floor((Math.random()*(max-min+1))+min))