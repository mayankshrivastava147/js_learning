// Immediatly Invoked Function Expression (IIFE)


(function chai(){
    console.log("DB CONNECTED");  //global scope se polluction se problem hoti hai, isliye iife ka use karte hai, also immediate function
    
})();

(()=>{
    console.log("DB CONNECTED 2")
})();


((name)=>{
    console.log(`DB CONNECTED 2 ${name}`)
})("Mayank")

