
// Write a short script to display "Hello, World!" in the console.
console.log("hello. world")

let hisName = "Chris";
let hisAge = 14;
hisName = "bob";

let myNameArray = ["Bob", "Ian", "Jules"];
let dog = { name: "Harry", breed: "german shephard" };

const bird = { species: "kestrel" };
bird.species = "Striated Caracara";
console.log(bird.species);


console.log(hisName)
console.log(myNameArray[2])
console.log(dog.name, dog.breed)

//▪ Write a script that declares three variables using let, const, and var. Assign them values of different data types (string, number, boolean).
var myCar = "Dodge Chalenger";
let itsPrice = 450;
const color = "blue";

console.log(" I have a car called" + myCar, "i bought is at $" + itsPrice, "and its" + color)
// ▪Log each variable to the console with a descriptive message.

// Create a function that takes an input and logs the data type of the input using typeof
let theInput = "hello me";
console.log(theInput)
console.log(typeof ("hello me"))

// the correct one
function logDataType(input) {
    console.log(typeof input);

}
logDataType(123);
//Write a function to check and log the data type of various variables.
function checkDataType(input) {

}