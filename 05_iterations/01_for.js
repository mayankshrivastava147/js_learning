// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    // console.log(element);
    
    
}


for(let i = 0; i <=3; i++){
    // console.log(`Outer loop value: ${i}`);
    for(let j=0;j<=5; j++){
        // console.log(i+ '*' + j + " = "+ i*j);
        
    }
    
}


let myArray = ['flash',"batman","superman"]
// console.log(myArray.lenght);

for (let i=0; i < myArray.length;i++){
    const element = myArray[i]
    // console.log(element);
    
}

for (let index = 1; index <= 20; index++) {
    if(index==5){
        // console.log("5 detected");
        break
    
    }
    // console.log(index);
    
}
for (let index = 1; index <= 20; index++) {
    if(index==5){
        console.log("5 detected");
        continue
    
    }
    console.log(index);
    
}