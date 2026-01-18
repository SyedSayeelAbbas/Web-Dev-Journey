let score = undefined

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber)

// "33" => 33
// "33abs" => NaN
//true => 1 ; false => 0

let isLoggedIn = "";

let boolIsLoggedIn = Boolean (isLoggedIn)
console.log(boolIsLoggedIn)

//" " => true , "" => false, "Sayeel" => true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(typeof stringNumber)

// ************************ Operations ***************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/2)
// console.log(2%2)

let str1 = "Hello"
let str2 = "Sayeel"
let str3 = str1+str2
console.log(str3)

// Math in Js is Done Left To Right
console.log("1"+2) // 12
console.log(1+"2") // 12
console.log("1"+2+2) // 122
console.log(1+2+"2") // 32

console.log(+true) // 1 but donot do this type of Converstion


let num1=2, num2=2, num3=2 // this is nice

num1 = num2 = num3 = 3; // all value are 3 but readiblity is down so donot do this

let ValueTotal =100;
// Prefix
++ValueTotal
console.log(ValueTotal)
// PostFix
ValueTotal++
console.log(ValueTotal)