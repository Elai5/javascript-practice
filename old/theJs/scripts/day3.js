var youHere = true;
var myNum = 4;
var myAge = 15;

if (myAge > 16) {
    console.log(" you are above 16");

} else if (myAge > 10) {
    console.log("you are over 10");

} else if (myAge > 40) {
    console.log("you are over 40");

}
else {
    console.log("you are over 20");
}

// if (youHere) {
//     document.write("I am here with you.");
// }
if (myNum > 6) {
    console.log("my nums is greater");
} else {
    console.log("this is absurd");
}

// Using arithmetic operators to calculate the total price of items in a shopping cart 
let scones = 20;
let tea = 30;
let total = tea + scones;

console.log(total)
// and comparison operators to check if a user’s age is above a certain threshold.
let userAge = 10;
if (userAge >= 18) {
    console.log("user can vote")
} else {
    // alert("user cannot vote");
    console.log("user cannot vote")
}
/*Write a function that takes an array 
and returns the sum of its elements using arithmetic operators.*/
let myArray = [1, 2, 3];
let sumArrray = 0;
function sumArray() {
    sumArray = myArray++;
    return sumArray;

}
// console.log(sumArray)
/*Use comparison operators to determine if a number is greater than, less than, or equal to another number.*/
let theNum = 9;
if (theNum >= 5) {
    console.log("this is greater");
} else if (theNum <= 2) {
    console.log("this is less than two");
} else if (theNum == 4) {
    console.log("this is true");
}