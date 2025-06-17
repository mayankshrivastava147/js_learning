const user = {
    username:"Mayank",
    price :999,
    welcome: function(){
        // console.log(this.username);
        // console.log(this);  // current context , current value
    
    }
    
}

    
// user.welcome()
// user.username="mmmm"
// user.welcome()
// let name = "mmmmmmm"
// console.log(this);


// function chai(){
//     let name = "mmmmmmm"
//     // console.log(this);
//     // console.log(this.username);
    
    
// }
// chai()

const chai = () =>{
    let username = "mmmmmmm"
    console.log(this);
    console.log(this.username);

}
// chai()




// const addTwo = (n1,n2) => {
//     return n1 + n2       //explicit retrun
// }

// console.log(addTwo(4,5));




// const addTwo = (n1,n2) => n1 + n2
// console.log(addTwo(4,5));


// const addTwo = (n1,n2) => (n1 + n2)  //implicit return
// console.log(addTwo(4,5));



// const addTwo = (n1,n2) => ({username:"mayank"})
// console.log(addTwo(4,5));



