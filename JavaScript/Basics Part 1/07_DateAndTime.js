// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// let myCreatedDate = new Date(2026,0,18)
// let myCreatedDate = new Date(2026,0,18,2,3)
// let myCreatedDate = new Date("2026-01-18")
let myCreatedDate = new Date("01-18-2026")
// console.log(myCreatedDate.toString())

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
