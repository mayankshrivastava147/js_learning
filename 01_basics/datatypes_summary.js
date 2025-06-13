// Primitive (call by value)

// 7 types : String, Number, boolean, null, undefined, Symbol, bigint




// Non Primitive (Reference)

// Arrays, Objects, Functions


const score = 100 
const scoreValue = 200.3
const inLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber= 79357947238107n

let myObj = {
    name:"hitesh",
    age: 28
}

const muFunction= function(){
    console.log("Hello World!")
}

console.log(id === anotherId)
console.log(typeof(bigNumber))
console.log(typeof(outsideTemp))
console.log(typeof(myObj))
console.log(typeof(muFunction))
// dont have to define the variable datatype thats why it is dynamically typed languange
 

let id3=1
let id2 = 1

console.log(id3===id2)
