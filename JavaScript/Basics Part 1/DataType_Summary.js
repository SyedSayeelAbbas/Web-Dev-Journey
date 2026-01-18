// Primitive DataType they are call by value so changes are done in there copy not the orignal value

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

/*JavaScript is a dynamically typed language. 
This means that variable types are 
determined at runtime based on the 
value they hold, and the same variable
can hold values of different types 
throughout the program without an 
explicit type declaration.  */

// Refrence (Non Primitive)

// Arrays, Objects, Functions
let array = [1,2,3]

let obj ={
  name:"Sayeel",
  age:19
}

let fun = function(){
  console.log("hello function")
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// There are two types of memory Stack and Heap
// Stack (Primitive) , Heapm (Non-Primitive)

let myLinkedInName = "Syed Sayeel Abbas";
let anotherName = myLinkedInName;
anotherName = "Mr Sayeel";
console.log(anotherName)
console.log(myLinkedInName)

let obj1={
  name:"sayeel"
}
let obj2=obj1;
obj2.name='ali';
console.log(obj2.name)
console.log(obj1.name)