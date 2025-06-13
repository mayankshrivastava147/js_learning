const marvel_heros = ["thor", "ironman","spiderman"]
const dc_heros = ['superman','flash','batman']

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)


// const all_heros = marvel_heros.concat(dc_heros)
const all_heros = [...marvel_heros,...dc_heros]  ///spread operators

console.log(all_heros)

const another_array = [1,2,3,[4,5],6,7,[6,7,[4,5]]]
let real_another_array = another_array.flat(Infinity)
console.log(real_another_array)

// Array methods

console.log(Array.isArray("mayank"))
console.log(Array.from("Mayank"))
console.log(Array.from({name:"mayank"})) //interesting bolna padega keys se banao ya values se


let score1=100
let score2=499
let score = 200


console.log(Array.of(score1,score2,score))