


function sayMyName(){
    console.log("m")
    console.log("y")
    console.log("a")
    console.log("a")
    console.log("n")
    console.log("k")
    
}

// sayMyName()

function addTwoNumbers(number1,number2){   //numbers1 and number2 are the parameters
    console.log(number1+number2)
}

// addTwoNumbers(7,8)

// addTwoNumbers(3,"3")
// addTwoNumbers(2,"d")  //7,8---3,"3" these are the arguments


// const result = addTwoNumbers(7,8)
// console.log("Result :", result)

function addTwoNumbers(number1,number2){   //numbers1 and number2 are the parameters
    // let result = number1 + number2
    // return result
    return number1 + number2

}

// const result = addTwoNumbers(7,8)
// console.log("Result :", result)


function loginUserMessage(username){
    //if(!username)
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("mayank"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());

function loginUserMessage(username="Mayank"){
    //if(!username)
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage());

