// const userEmail="m@mayank.ai"

// if (userEmail){
//     console.log("Got user Email");
    
// } else{
//     console.log("Dont have user Email");
    
// }




// const userEmail=""

// if (userEmail){
//     console.log("Got user Email");
    
// } else{
//     console.log("Dont have user Email");
    
// }




const userEmail=[]

if (userEmail){
    console.log("Got user Email");
    
} else{
    console.log("Dont have user Email");
    
}


// Falsy values :- false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values :- "0", 'false', " ", [], {}, function(){}

if(userEmail.length === 0 ){
    console.log("Array is empty");
    
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0 ){
    console.log("Object is empty");
    
}

// Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10

// val1 = null ?? 10

val1 = null??10??20

// console.log(val1);


// Terniary Operator


// condition ? true : false


const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("80 ki hai"):console.log("mehngi hai")

