const accountId = 144553
let accountEmail = "mayank@test.com"
var accountPassword = '12345'
accountCity = 'Bhopal' 
let accoubtState;
// accountId = 2 // not allowed
accountEmail = 'abc@abc.com'
accountPassword = '29395'
accountCity = "bengaluru"
console.log(accountId);

/* 
Prefer not to use var, 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accoubtState])