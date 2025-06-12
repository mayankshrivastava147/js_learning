// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023,4,23)

// console.log(myCreatedDate.toDateString())
// let myCreatedDate = new Date(2023,4,23,5,6)
// console.log(myCreatedDate.toLocaleString())

// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate.getMonth())
console.log(newDate.getDay())

// `${newDate.getDay()} and the time is`

console.log(newDate.toLocaleString('default',{weekday: "long"}))