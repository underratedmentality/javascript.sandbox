let myAtmPin = 5678;
let enteredPin = 5678;
const myBalance = 8000;
let transactionAmount = 5000;
if (myAtmPin === enteredPin) {
  console.log("perform Transaction");
} else {
  console.log("incorrect Pin");
}

// ternary operator
// condition ? first action : second action

myAtmPin === enteredPin
  ? console.log("perform Transaction")
  : console.log("incorrect Pin");


myBalance <= transactionAmount
? console.log("Transaction Successful")
: console.log("Insufficient funds");

