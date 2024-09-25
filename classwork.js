//determine whether variables should be constant or let 
//create a variable named my country set it to whatever value 
//create a variable called my age set it to your value 
//create a variable called fullName and set it to any value 
//log the length of your country as well as the length of fullname to the console 

//convert the full name to all upper case 
//extract just the first name in your fullname and log it to the console 
//write a short description of the person in this format 
//e.g peter pan is a citizen of portugal 

//increase the age declared above by 1

//log the remainder of when 100 is divided by 7 to the console 
//check whether the country variable starts with h

const Country = "Nigeria"
let myAge = 23
const firstName= "omogbolahan"
const lastName= "olanrewaju"
console.log(firstName);
console.log(lastName);
const fullName= firstName + " " + lastName;
console.log(fullName);
console.log(fullName.toUpperCase());
console.log(Country.length);
console.log(fullName.length);
console.log(fullName.substr(0,11))
const description= `${fullName} is a citizen of ${Country}`
console.log(description);
myAge++;
console.log(myAge);
console.log(100 % 7);
console.log(Country.startsWith("h"));

//test data1 
const markMass = 95
const marksHeight = 1.88
const JohnMass = 85
const JohnsHeight = 1.76

const marksBmi = markMass / marksHeight ** 2
const johnsBmi = JohnMass / JohnsHeight ** 2
const markHigherBmi = marksBmi > johnsBmi
console.log(marksBmi, johnsBmi);

console.log(markHigherBmi);

// if (markHigherBmi) {
//     console.log("Mark's BMI is higher than John's BMI!");
// }else {
//     console.log("John's BMI is higher than Mark's BMI");   
// }

if (marksBmi > johnsBmi) {
    console.log("mark's BMI is higher than John's");  
}else if (johnsBmi > marksBmi) {
console.log("John's BMI is higher than Mark's");
}else {
    console.log("Johns BMI and Marks BMI is equal");    
}

//nested "if"

let userChoice = "rock";
let computerChoice = "scissors";
//paper

if (userChoice === computerChoice) {
  console.log("This is a tie");
} else if (userChoice === "rock") {
  if (computerChoice === "scissors") {
    console.log("User wins, Rock smashes scissors");
  } else {
    console.log("Computer Wins, Paper covers rock");
  }
} else if (userChoice === "paper") {
  if (computerChoice === "rock") {
    console.log("User wins, paper covers rock");
  } else {
    console.log("computer wins, scissors cuts paper");
  }
} else if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    console.log("Computer wins, rock smashes scissors");
  } else {
    console.log("User wins, scissors ccuts paper");
  }
} else {
  console.log("Invalid entry, try again");
}

//Switch statement; they are used to perform action based on different condition
const grade= "A"

switch (grade){
    case "A":
    case"a":
    console.log("Excellent");
    break;
    case "B":
    case "b":
    console.log("Very Good");
    break;
    case "C":
    case "c":
    console.log("Good");
    break;
    case "D":
    case "d":
    console.log("Fair");
    break;
    case "E":
    case "e":
    console.log("Poor");
    break;
    case "F":
    case "f":
    console.log("Failed");
    break;
    default:
        console.log("invalid");
}








