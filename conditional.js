//CONDITIONAL STATEMENT
//control 
//they are used to perform actions based on conditions
const myBalance = 3000;
const transaction = 9000;
//if statement 
//if (condition){lines of code//}
if (false) {
    console.log("yes");   
}
if (myBalance > transaction) {
    console.log(("Transaction successful"));   
}
// 18+
const age = 20;
if (age >= 20) {
    console.log("you are eliible to vote");
}
// if the length of the password is 7 and above -good password
const password = "e67e6d";


if (password.length >=7 && password.includes("@")) {
    console.log("Good Password");  
}
//if else statement 
//if (condition){
//first ation}
//else { 
//section action}

if (age >= 18) {
    console.log ("you are eligible to vote"); 
} else {
    console.log("you are ineligible to vote, you must be 18+");}

    // youth/underage 0-40 or 41
    const age3 = 33
    if (age3>=0 && age3 <=40) {
        console.log("you are in the yourh /underage category");
        } else {
            console.log("you are in the age category");
        }

const number=5;
if (number %2===0) {
console.log("it is an even number");
}
else {
console.log("it is an odd number")
}

const savings=9000;
const transactionAmount=4000;
if (savings <= transactionAmount){
    console.log("insufficient funds");
}else{
    console.log("transaction is successful");
    }

// multiple conditions else if statement 

// positive negative and zero
let num=98;
if (num > 0){
    console.log ("this is a positive number")
}
else if (num < 0){
    console.log("this is a negative number");
}
else {
    console.log("this is zero");
}

// underage 0-12 teen 13-19 adults 20 aged 41
const age4=70;
if (age4 > 0 && age4 <= 12){
    console.log("person is considered underaged");
}
else if (age4 >= 13 && age4 <= 19){
    console.log("person is considered a teen");    
}
else if (age4 >= 20 && age4 < 41){
    console.log("person is considered an adult");    
}
else if (age4 >= 41) {
  console.log("person is considered aged");
}
else {
    console.log("invalid age, try again");
    
}