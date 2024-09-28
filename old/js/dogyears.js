//declares user age
let myAge = 20;
//declare early year age
let earlyYears = 2;
earlyYears *= 10.5;
//create new var for lateryears
let laterYears = myAge - 2;
//to calculate dogyear,multiplylaterYear by 4
laterYears *=4;

console.log(earlyYears);
console.log(laterYears);

//determine dog year by creating new var
let myAgeInDogYears = earlyYears * laterYears;

//use stringmethod
let myName = "mary".toLowerCase();

console.log(`my name is ${myName}. I am  ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years`);

