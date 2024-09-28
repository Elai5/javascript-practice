// 1. values and variables
let country = 'Kenya';
const continent = 'Africa';
let population = 20000000;

console.log('I am from ' + country + ' it is located in ' + continent + ' with a population of ' + population);

//2. data types
const isIsland = false;
let language;

console.log(typeof (isIsland));
console.log(typeof (population));
console.log(typeof (country));
console.log(typeof (language));

//3. diffrent var
language = 'bantu';
// 4. basic operators
country = (population / 2);
console.log('country has been split and now we have' + country + ' people');
country = country + 1;
console.log(country);

let finland = 6000000;
if (country > finland) {
    console.log('you are more than finland');
} else {
    console.log('we are less')
}
let averagePopulatin = 130;
if (country < averagePopulatin) {
    console.log('your coutry have less than average people');
} else {
    console.log('you suprpassed average population');
}
let description = 'Portugal is in Europe, and its 1 million people speak portuguese';

// lec 5. stings and template literals   
description = `Portugal is in Europe
and its 1 million people speakaing portugese`;

//lec6 taking decision if/else statements
if (country > averagePopulatin) {
    console.log("portugal population is above average")
} else {
    console.log("portugal population is 22 million bellow average");
}