//ARRAYS - these are complex data types 
//[element1, element2]
const mixedArr = [9, "str", true, 65, 9.8, null, [90, false]];
const students = ["Goodness", "Aisha", "Adura"]
console.log(students);

// ARRAY PROPERTIES (length)
console.log(students.length);
//getting elements in an array - position arrName [position]
console.log(students[0]);
//change element in an array 
students [1] = "john doe"
console.log(students);
students [2] = "tobi"
console.log(students);

// ARRAY METHODS
// adding and removing elements from an array (push, pop, shift and unshift)
// LIFO
students.push ("Theresa");
students.push ("Farouq");
students.pop();
students.pop();
console.log(students.pop());
students.unshift("adedayo");
students.unshift("Timi");
students.shift();
console.log(students);


// How we can convert an array to a string
// methods include (toString, join)
console.log(students.toString());
console.log(students.join("-"));


const onlineStudents = ["john", "peter", "paul"];
const weekdayStudents = ["Ade", "Susan", "joy"]
const allStudents = onlineStudents.concat(weekdayStudents, ["Ruth", "Gift"]);
console.log(allStudents);
// Includes 

console.log(onlineStudents.includes("Ade"));
console.log(onlineStudents.includes("paul"));

// sort, reverse

const carBrands = ["toyota", "lexus", "bmw", "audi", "chevrolet"]
console.log(carBrands);
console.log(carBrands.sort());
console.log(carBrands.reverse());

// extract portions of an array (slice (start,end(not included)))

const friends = ["ola", "timi", "john", "jane", "lott"]
console.log(friends.slice(0, 2));
console.log(friends.slice(4));

// (back to string) split
let text = "hello world is fun";
console.log(text.split(" "));

const text2 = "tadapal"
console.log(text2.split ("a"));

// hello ollieh 
const reverseStr = (str) => str.split("").reverse().join ("")
 console.log(reverseStr("hello"));

// push pop unshift shift includes slice sort reverse concat;

 // higher order array methods (callback functions, iterator methods)
 // for of method 

 const fruits = ["oranges", "mangoes", "pear", "grapes"]
 for (const fruit of fruits) {
  console.log(`${fruit} is something i like`);
  if (fruit === "pear"){
    console.log(`${fruit} is my best fruit`);
  }
 }


 // other array methods (find, filter, forEach, map, reduce, every, some)

 // FOREACH METHOD - it excutes a function for each element in an array. 
const customers = ["ola", "peter", "tobi", "lanre", "gbolahan"];
customers. forEach((customer, index) => {
  console.log(customer, index);
});
const customerOfTheWeek = customers.find ((customer) => {
  return customer.length  > 4
});
console.log(customerOfTheWeek);


// MAP - creates a new array with transformed element. 

const nums= [4, 5, 6, 7]

const transformedNums = nums.map ((num)=>{
  return num * 2;
});
console.log(transformedNums);

// FIND - this returns the first matching elements in an array. 
const specialNums = nums.find ((num) => {
  return num > 5
});
console.log(specialNums);

// Filter - returns all elements that fit a search condition in an array 

const allMySpecialNums = nums.filter((num) => {
  return num > 5 
})
console.log(allMySpecialNums);



let myBalance = 8000
const transactions = [4000, -125, 10000, -5000, -2000, 1500]

transactions.map ((transaction) => {
  if (transaction > 0) {
    console.log(`you have been credited with ${transaction} Naira`);    
  }else {
    console.log(`you have been debited ${transaction} Naira`);
    }
});
transactions.map((transaction) => {
  myBalance += transaction;
});
console.log(myBalance);

const creditTransactionFilter = transactions.filter((transaction) => transaction > 0)
console.log(creditTransactionFilter);

const debitTransactionFilter = transactions.filter ((transaction) => transaction < 0)
console.log(debitTransactionFilter);

const maxTransaction = 50000 
// find if there is any transaction close to that maxTransaction
transactions.push (100000)
const specialTransaction = transactions.find((transaction) => transaction >= maxTransaction)
console.log(specialTransaction);

// Every and Some 
// Every - checks if all elements satisfy a condition (true or false)
const Ages = [20, 42, 61, 81]
const allAdults = Ages.every ((age) => age >= 18) 
console.log(allAdults);


// Some - this checks if atleast one satisfies the condition
const someChildren = Ages.some ((age) => age < 18)
console.log(someChildren);

// Reduce - this is used for accumulating numbers (previous and current)
const cartPrices = [25000, 32000, 15000, 4000, -2500]
const cartTotal = cartPrices.reduce((prev, curr) => {
return prev + curr
}, 3000)
console.log(cartTotal);

//sort
const peoplesName = ["zigi", "samson", "niyi", "ademola"];
//const atoZ = peoplesName.sort();
//console.log(atoZ;)
const ztoA = peoplesName.sort ((a, b) => b - a);
console.log(ztoA);

const prices = [8000, 67000, 767, 5600]
//const highesttoLowest = prices.sort ((a,b) => b - a);
//console.log(highesttoLowest);
const lowesttoHighest = prices.sort ((a, b) => a - b);
console.log(lowesttoHighest);

//includes , reverse, slice, push-pop, unshift-shift, Find, filter, forEach, map, reduce, every, some, sort


// Yet to check 
// Array.isArray - checks if a variable is an array or not
console.log(Array.isArray([1,2,3]));

//Array.from - changes a datatype to an array 
console.log(Array.from("123"));

//indexof, lastindexof

const arr = ["ade", "john", "jane", "ade"]
console.log(arr.indexOf("ade"));
console.log(arr.lastIndexOf("ade"));


// delete - 
console.log(arr);
delete arr[1];
console.log(arr);

//findIndex - gives me the position of the element that matches a search condition
const arr2 = [5, 6, 7, 8, 120, 500, 56];
const theIndexIs = arr2.findIndex((num) => num > 100);
console.log(theIndexIs);








