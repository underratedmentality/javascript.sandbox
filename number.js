// NUMBER E.g 9 0 0.4 1198
const myAge = 87;

// number methods toFixed
const num = 9.2678;
console.log (num.toFixed(0));
console.log(num.toFixed(3));
console.log(num.toFixed(2));

// + - / *
const x=7;
const y=7;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//** raise to the power
console.log(3**2);
//modulus % (return the remainder of a division)
console.log(2 % 2);
console.log(6 % 2);
console.log(100 % 10);
//order of operation (BODMAS)
//PEMDAS
//likes= likes + 1
//likes= likes + 1
//likes= likes + 1
//likes= likes - 1
//likes++;
//likes++;
//likes++;
//likes--;

let savings= 5000;
savings= savings + 3000;
//savings +- 30000
savings= savings + 10000;
//saving-=savings-7000
savings=7000;
//525
//savings = savings -525;
savings -= 525;
console.log(savings);
savings  += 20000;


const fullName = 'peter pan'

const accountNumber= 56789054;
let myBalance=4000;
//jan transaction 
//credited 10000 debited 200 as sms charges, recieved gift of 3000
//, gifted someone 1200
myBalance += 10000;
myBalance -=200;
myBalance += 3000;
myBalance -= 1200; 
console.log ("my balance is", myBalance);
//fullname with account number; accountNumber has a balance of myBalance
const accountStatement = `${fullName} with account number ${accountNumber} has a balance of ${myBalance.toFixed(2)}.`;
console.log(accountStatement)