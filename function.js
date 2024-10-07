// functions 
//functions are used to run snippets of code
// function declaration 
function greeting () {
    console.log ("Welcome to our app")
}
//  for a function to work it needs to be invoked/called. 
// greeting ();
greeting ();
greeting();
function speak () {
console.log("Hello class");

}
speak();
// Function can take parameters
function specialGreetings(name= "user") {
    console.log(`${name}, Welcome to our app`);
    
}
specialGreetings("Tobi");
specialGreetings("Gbolahan");
// Default parameters 
specialGreetings();
// write a function that logs the addition of two numbers
function addTwoNums(num1, num2, num3) {
    const result = num1 + num2 + num3;
    console.log(result);   
}
addTwoNums (9, 5, 2);
addTwoNums (-10, 7, 3);

// Check if a number is positive, negative, zero
function checkNum (num) {
    if (num > 0) {
      console.log(`${num} is positive`);
    } else if (num < 0) {
      console.log(`${num} is negative`);
    } else {
      console.log("This is zero");
    }
} 
checkNum(89);
checkNum(-54);
checkNum(0);

// Function expression 
myFunction1 ();
function myFunction1 () {
    console.log("This is a func declaration");
}
const myFunction2 = function ( ) {
    console.log("This is a func expression");   
}
myFunction2();

//hoisting - moves all of functions declaration up to script 

//return key word 
// Write a function that calculates the p;roduct of two numbers 
const productOfTwoNums = function (num1, num2) {
    return num1 * num2 
}
const result = productOfTwoNums (9, 2);
console.log(result);
console.log(`The result is ${result}`);

// write a function that converts km to meter
// 7km - 7 * 1000

const KmToMeters = function (value) {
    const meter = value * 1000;
    return `${value}km is equal to ${meter}`
    // anything after the return keyword in a block of code is inaccessible
}
console.log (KmToMeters(6));
console.log(KmToMeters(4.5));

// write a function that calculate the average of three numbers and returns the average 

const productOfThreeNum = function (num1, num2, num3) {
const average = (num1 + num2 + num3) / 3;
return average
}
console.log(productOfThreeNum(1, 2, 3));

console.log (productOfThreeNum(2, 9 , 12))

// write a function that calculates the age of user, your function should take in year of birth as a parameter

const userAge = function (YearOfBirth) {
const age = (2024 - YearOfBirth)
return age 
}
console.log(userAge(1976));

//write a function that checks if a number is even or odd 

const oddOrEven = function (num) {
    if (num % 2 === 0) {
    return "This is an Even number";
    }
    else {
        return "This is an odd number";
    }
};
console.log(oddOrEven(30));

let savings = 10000

function checkWithdrawal (amount) {
    if (amount < savings) {
       savings -= amount
        return `withdrawal ${amount} is successful and my balance is ${savings}`
    }
    else {
        return `insufficient funds`
    }
}
console.log(checkWithdrawal(4000));

const depositAmount = function (amount) {
    savings += amount; 
    return `deposit of ${amount} is successful and your current balance is ${savings} `
};
console.log(depositAmount(700));
console.log(depositAmount(1000));
console.log(checkWithdrawal(2000));



let balance = 30000
function withdrawal (amount) {
    if (balance -= amount){
        return `withdrawal of ${amount} is successful, your main balance is ${balance}`
    }
    else  {
        return `insufficient`
    }
}
console.log(withdrawal(18000));
console.log(withdrawal(2000));

const deposit = function (amount) {
    balance += amount; 
    return `deposit of ${amount} is successful, your main balance is ${balance}`
}
console.log(deposit(4000));
console.log(withdrawal(12000));

// build a simple atm machine
let userpin = 1234
let savings = 100000

//write a function that checks the enteredPin

const checkPin = function (enteredPin) {
    if (enteredPin === userpin) {
        return true
    }else {
        return false
    }
};
console.log(checkPin(2345));
console.log(checkPin(1234));

const withdraw = function (amount) {
   if  (checkPin(1234)){
    if (savings > amount) {
        savings -= amount;
        console.log(`The withdrawal of ${amount} is successful and my balance is ${savings}`);    
    } else {
        console.log("insufficient funds");
    }
    } else {
        console.log("Incorrect pin, try again");
        
    }
   }
withdraw (20000);
withdraw (10000);
//deposit 
const depositAmount = function (amount) {
    if (checkPin(1234)) {
        savings += amount
        console.log(`deposit of ${amount} is successful, Your main balance is ${savings}`); 
    }
    else {
        console.log("incorrect pin, try again");
        
    }
}
depositAmount (7000)
// write a function that checks balance 
const balance = function () {
    if (checkPin(1234)) {
        console.log(`Your current balance is ${savings}`);
        
    }else {
        console.log("Incorrect Pin, Try again");   
    }
}
balance ();
// write a function that checks number of attempt on the pin,
//max attempt is 3 , card should be blocked
let attempt = 0;
let blocked = false;

const checkCardAttempt = function () {
  if (blocked) {
    console.log("Your Card is Blocked");
    return;
  }
  if (checkPin(7890)) {
    console.log("Perform Transaction");
    attempt = 0;
  } else {
    attempt++;
    if (attempt === 3) {
      console.log("Your Card is Blocked");
      blocked = true;
    } else {
      console.log(`Incorrect Pin, ${3 - attempt} attempts left`);
    }
  }
};
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();
checkCardAttempt();



// Arrow function is a modern way of writing a function
const myFunction = (p1, p2) => {

}
// write an arrow function to check if a password is long enough (min password length should be (7 characters))
const passwordCheck = (value) => {
  if (value. trim(). length >= 7) {
    console.log("password is long enough");
  }else {
    console.log("Short password, Try again");  
  }
};
passwordCheck("password");
// return keyword
//const CalcAverage = (num1, num2) => {return (num1 + num2)/ 2;};
const calcAverage = (num1, num2) => (num1 + num2) / 2;
console.log(calcAverage(8, 5));

const KmToMetersAgain = (value) => `${value} Km is equal to ${value * 1000} m`;
console.log(KmToMetersAgain (8, 5));

// SCOPING GLOBAL LOCAL 
const globalVar = "EXAMPLE";
const num5 = 90;

const example = () => {
console.log(globalVar);

const myValue = 90;
console.log(myValue);
};

const mySavings = 9000;

const seeBalance = () => {
  const mySavings = 10000;
  console.log(mySavings);
}
seeBalance ()
console.log(mySavings);

const num = 8;
const func1 = () => {
  const num = 89;
  console.log(num);
}
const func2 = () => {
  const num = 12;
  console.log(num);  
};
console.log(num);
func2 ()

// write a function that takes in any string as a parameter and return the string in all capital letter

const fullName = (johndoe) => johndoe.toUpperCase();
console.log(fullName("john"));

// write a function that takes in any string as a parameter and converts the first letter of the word to uppercase

const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase();
console.log(capitalizeFirstLetter("tobi"));

// Write a javascript function that accepts an argument and returns the datatype

const checkDataType = (arg) => typeof arg;
console.log(checkDataType(30));

// write a function that returns whether a number is even or odd 

const evenOrOddNum = (num) => num % 2 === 0 ? "this is an even number" : "this is an odd number"
console.log(evenOrOddNum(20));

// write a function named minutesToHour that recieves a number of minutes as a parameter and returns the number, representing the same amount of timwe in hours

const minutesToHour = (minutes) => `${minutes} is equal to ${minutes / 60}hrs`
console.log(minutesToHour(180));

// write a function called longeststring that recieves two strings as parameters and returns the longest of the two strings 

const longeststring = (str1 , str2) => (str1.length > str2.length ? str1 : str2);
console.log(longeststring("olanrewaju", "gbolahan"));

// write a function named concat3 that recieves 3 strings as parameters (string1, string2, string3) and an additional string named separator. the function should concatenate the three dtrings using the provided separator and return the result. 


const concat3 = (str1, str2, str3, seperator) => str1 + seperator + str2 + seperator + str3;
console.log(concat3("mary","sarah","temi","-"));


// write a function that returns the square of a number

const squareOfNumber = (value) => value ** 2;
console.log(squareOfNumber(8));

 // write a function called checkLoanEligibility, which recieves an amount in parameter and returns whether a user is eligible or not based on the criteria which is the loan amount cannot be more than twice the amount of savings.

 let savings = 60000;
 //  45000, 200000, 70000

 const checkLoanEligibility = (loan) => loan  < savings * 2 ? "user is eligible to loan amount" : "user is not eligible to loan amount";
 console.log(checkLoanEligibility(45000));
 console.log(checkLoanEligibility(200000));
 console.log(checkLoanEligibility(70000));
 
 // this week
 //func declaration
 //func expression 
 //return keyword
 //arrow function
 //scoping

 // write a function that logs hello world to the console
function greeting () {
  console.log("hello world");
}
greeting ()
const logger = () => console.log("hello world");
logger()

// write a function that returns 34
const loggernum = () => 34;

//write a function that returns the number of vowels in a string
const countNumberOfVowels = (str) => {
  let vowels = "aeiou";
  let numOfVowels = 0;
  const lowerCaseStr = str.toLowerCase();
  // loop over the lowerCaseStr
  for (let i = 0; i < lowerCaseStr.length; i++) {
    if (vowels.includes(lowerCaseStr[i])) {
      numOfVowels++;
    }
  }
  return numOfVowels;
};

console.log(countNumberOfVowels("hello world"));





