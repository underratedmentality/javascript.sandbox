// DATA TYPES 1. Primitive, 2. Complex
//  primitive data tyypes are data types that can hold only one value at a time ; STRINGS , NUMBER, BOOLEAN, NULL, UNDEFINED 
//  COMPLEX data tyypes are data types that can hold more than one value at a time; Object and arrays
// primitive strings ; '', "" strings are known as text characters and they are known as quotation marks, '' & ""
// examples;
const firstName= "John";
const lastName= "Doe";
console.log(firstName);
console.log(lastName);
//  string properties; length properties, concatenation(joining)
// to use length properties it is written as "string.length"
console.log(firstName.length);
console.log(lastName.length);
// concatenation properties is used to join string together
const fullName= firstName + " " + lastName;
console.log (fullName);
console.log (fullName.length);
// STRINGS METHOD- these are functions that can be performed on strings.
// toUpperCase, toLowerCase
console.log (fullName.toUpperCase());
console.log (fullName.toLocaleLowerCase());
//  replace, replaceAll
console.log (fullName.replace("o" , "#"));
console.log(fullName.replaceAll("o", "#"));
console.log(fullName.replace("John", "#"));
// includes 
console.log(fullName.includes("h"));
console.log(fullName.includes("y"));
// startsWith, endsWith
console.log(fullName.startsWith("j"));
console.log(fullName.startsWith("Jo"));
console.log(fullName.endsWith("j"));
console.log(fullName.endsWith("e"));
console.log(fullName.endsWith("Doe"));

const myEmail= "olalott2001@gmail.com";
console.log (myEmail.length);
console.log (myEmail.toUpperCase());
console.log (myEmail.includes("e"));
console.log (myEmail.endsWith("google.com"));

// indexOf, lastIndexOf- this shows a function of positioning
console.log(myEmail.indexOf("o"));
console.log(myEmail.indexOf("a"));
console.log(myEmail.lastIndexOf("o"));
// 
console.log(myEmail.charAt(20));
// Concat method-used for joining
console.log(myEmail.concat("example"));
// trimming- this is usesd for the removal of widespaces
const userName= "    underratedmentality    "
console.log(userName.length);
console.log(userName.trim());
console.log(userName.trimStart());
console.log(userName.trimEnd());
// extract portions of a string- slice method, substring method, substr
// slice & substring method- (start, end(inclusive)), they are used to extract portions
const surname= "Sandler";
console.log(surname.slice(0,4));
// substr- (start, number of characters we want)
console.log(surname.substr(3, 6));
// template literals- it allows us to format variables into strings
const author = "ngozi Adichie";
const bookTitle= "americanah";
const yearPublished= "2016"
// backticks `the book ${bookTitle}`
// the book americanah written by ngozi adichie was publisjhed in year 2016 
const description= `the book ${bookTitle} written by ${author} was publish in ${yearPublished}`
console.log(description)

// 
const name1="Ade"
const name2="Wale"
// Ade is a boy
const sentence = `${name1} is a boy.`
// his name is wale 
const sentence2= `his name is ${name2}`;

// `tinubu said and i quote `let the poor breathe`
const quote= `tinubu said and i quote "let the poor breathe"`;
console.log(quote);