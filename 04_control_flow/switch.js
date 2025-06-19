// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3

switch(month){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febuary");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    default:
        console.log("Not matched");
        break;
        
        
}  //break is interesting, if key match the whole code below this gets executed, except default

const month_name = "march"

switch(month_name){
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("Febuary");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Not matched");
        break;
        
        
}