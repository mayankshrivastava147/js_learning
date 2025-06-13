// singleton : with constructor

// object literals
// Object.create
const mySym = Symbol("key1")
const jsuser = {
    name : "Mayank",
    "Full Name":"Mayank Shrivastava",
    [mySym] : "Mykey1",
    age: 28,
    location: "bhopal",
    email:"mayank@google.com",
    isLoggedIn: false,
    lastLoginDays:["monday","saturday"],
}

console.log(jsuser["Full Name"])
console.log(typeof jsuser["age"])
console.log(typeof jsuser[mySym])

jsuser.email = 'mayank@chatgpt.com'

// Object.freeze(jsuser)


jsuser.email='mayank@microsoft.com' // this change will not redlect due to freeze


console.log(jsuser)

jsuser.greeting = function(){
    console.log("Hello JS User")
}


jsuser.greeting_two = function(){
    console.log(`hello js user ${this.name}`)
}
console.log(jsuser.greeting)
console.log(jsuser.greeting())
console.log(jsuser.greeting_two())