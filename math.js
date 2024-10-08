// MATH OBJECTS
console.log(Math.PI);


// MATH METHODS
// round, ceil, floor, trunc, random, max, min, power, square root.
console.log(Math.pow(4, 4));
// 4 ** 4
console.log(Math.sqrt(9));

console.log(Math.max(10, 2, 56, 78));

console.log(Math.min(1, 30, 23, 56));

console.log(Math.round(9.56));

console.log(Math.round(9.3));

console.log(Math.ceil(9.1));

console.log(Math.ceil(-1.2));// -rounding up

console.log(Math.floor(9.9));// - rounding down

console.log(Math.trunc(10.3)); // removes the decimal

console.log(Math.trunc(-4.6));

//random - 0.1
console.log(Math.random());

// random - 0-5 
const randomnumber = Math.random () * 5; 
console.log(randomnumber);

const randomNumber = Math.trunc(Math.random () * 6);
console.log(randomNumber);

const customers = ["timi", "eniola", "aisha", "olumide", "sesan"]
const numOfCustomers = customers.length
const randomCustomerPosition = Math.floor(Math.random() * numOfCustomers)

console.log(customers[randomCustomerPosition]);

