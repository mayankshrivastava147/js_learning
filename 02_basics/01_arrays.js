const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman', 'naagraj']
const muArr2 = new Array(1,2,3,4)

// console.log(myArr[1])


// myArr.push(6)

// myArr.push(7)

// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join() //convert it into the string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)

//Slice and Splice


console.log("A ", myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)

console.log("B ", myArr)

const myn2 = myArr.splice(1,3) // remove this range
console.log(myn2)
console.log("c ", myArr)