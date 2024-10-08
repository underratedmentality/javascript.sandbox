// 
// rest and spread operator 

//optional chaining

//nullish coalescence 


// nullish coalescence 
// leftExpression ?? defualtValue
const username = null 

console.log(username ?? "Unknown User");


// optional chaining

const user = {
  name: "John Doe",
  age: 45,
  gender: "Male",
  previousJobs: {
    one: "Jumia",
    two: "Paystack",
    three: "Meta"
  }
}
console.log(user.name);
console.log(user?.car);
console.log(user?.previousJobs?.three
);
  //display picture
  // <img src= {}
  // img src = {user?.profilePic}


// rest and spread operator (...)

// rest operator 
const countries = ["cuba", "algeria", "mexico", "USA"]
const [one,two, ...others] = countries
console.log(one);
console.log(others);

const country = {
  name: "Nigeria",
  yearOfIndependence: 1960,
  nativeLanguage: "English",
  IsIsland: false, 
}
const {name, IsIsland, ...remaining} = country
console.log(remaining);

// Spread operator (...)
const africanCountries = ["Mali", "Togo", "Kenya", "Uganda"]
const asainCountries = ["China", "Japan", "Bangladesh", "Vietnam"];
const allCountries = [...africanCountries,"Congo", ...asainCountries, "Australia", "France"]
console.log(allCountries);
africanCountries