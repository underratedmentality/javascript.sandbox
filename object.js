// OBJECT 
//const person = ["ade", "wale", 67. "google", true];

// {key : value, key2 : value2}
// key and value pairs are called object properties  
const person = {
  firstname : "Ade",
  lastname : "Wale",
  Age : 64,
  isMarried : true,
  Friends : ["john", "Jane"],
  workHours: {
    monday : "8 hours"
  } 
}
console.log(person);

// Access properties inside of an object
// Here are two ways it can be done 


// dot notation : objName.propertyName
console.log(person.Age);
console.log(person.Friends)
console.log(person.workHours.monday);

// Bracket notation : objName ["propertyName"]
console.log(person["Age"]);
console.log(person ["Friends"]);
console.log(person["workHours"]["monday"]);
console.log(person["Friends"][1]);

// adding a new property to an object
person.car = "Benz"
person.hobbies = ["basketball", "eating", "sleeping"]
console.log(person);

// Removing a property from an object 
delete person.isMarried
console.log(person);

// object methods - these are functions a developer writes to work on an object
const book = {
  title: "In The Shadow",
  author: "Farouq Lawal",
  yearPublished: 2000, 
  genre: "Fictiion",
  isBestSeller: false, 
  rating: 3.5,
  summary: function () {
    // the book is titled in the shadow and it is written by John Doe and has a rating 3.5
    console.log(`The book is titled ${this.title} and it is written by ${this.author} and it has a ${this.rating} rating.`);
  },
};
book.summary();
// the THIS KEYWORD - inside a function declaration in an object it refers to the object itself. 

// OBJECT DESTRUCTURING - it is a modern and faster way of picking properties in an object.
const user = {
  firstname: "user001",
  lastname: " peter pan",
  password: "**********",
  profilePic: "avatar",
  followers: ["Wale", "John", "Jane"],
  following: ["Elon Musk", "T pain", "Ronaldo"],
  dataOfAccount: 2020,
  post: {
    title: "Js is Fun",
    description: "I love Js a lot"
  }
};
user.profilePic;
user.post.title;
const { username, profilePic, dataOfAccount, password, followers } = user;
const {post: {title, description}} = user;
console.log(title, description);


const myMainUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};
const email = "mubarak@google.com";
//aliase
const {
  id,
  email: mainUserEmail,
  address: {
    street,
    geo: { lat: latitude, lng: longitude },
  },
  company: { name, catchPhrase, bs },
} = myMainUser;
console.log(myMainUser);


// Array destructuring

const peoplesName = ["susan", "joy", "mercy", "ade"]
const [one, ,two] = peoplesName
console.log(one,two);

