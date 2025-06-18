// let a =10
// const b =20
// var c =30


// {}
// var c = 300

if(true){
    let a =10
    const b =20
    var c =30

}

// console.log(a);
// console.log(b);
// console.log(c); //var local me hai but global me bhi value de raha hai isliye isse use nhi karte , var ka scope hai completly global

let a =300
if(true){
    let a =10
    const b =20
    var c =30
    // console.log("INNER:", a);
    

}
// console.log(a);
// // console.log(b);
// // console.log(c);



function one() {
    const username = "Mayank"

    function two() {
        const website = "youtube"
        console.log(username);
        
        
    }
    // console.log(website);
    

    // two()
    
}

// one()


if(true){
    const username = "Mayank"
    if(username==='Mayank'){
        const website = "youtube"
        //  console.log(username , website);
        
    }
    //  console.log(website);

}
//  console.log(username);

//********************* interesting ***********************/


console.log(addone(5));

function addone(num) {
    return num + 1
    
}


// addTwo(5)

const addTwo = function addone(num) {
    return num + 2
    
}


