// ASYNCHRONOUS JS/  NON-BLOCKING CODE
//SYNCHORONOUS/ BLOCKING CODE
console.log("a");
console.log("b");// download a file of 2gb
console.log("c");// send an email
 
 console.log(1);
 setTimeout(() =>{
    console.log((3), 5000);
    
 })
 console.log(3);

 //fetching data

 // API - application prpogramming interface
 

 const url = "https://jsonplaceholder.typicode.com/users";

 // PROMISES - fullfiled, rejected, pending
 //asyn / await

 const getUser = async () => {
    try {
        const Response = await fetch(url)
        const data = await Response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}
getUser()

// REQUEST METHODS

// GET - its use to retrieve data,
// POST- is used to create data,
// PATCH - its use to update data,
// DELETE - its use to remove data,
// PUT- its use to update (total overhaul)

