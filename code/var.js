// 1. values and variables
let country = 'Kenya';
const continent = 'Africa';
let population = 200000000;

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
let averagePopulatin = 13;
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

// lec 8: equality operators
// let numNeigbours = prompt('How many neighbour countries does your country have?');
// if (numNeigbours === 1) {
//     document.write("ONly 1 border!");
// } else if (numNeigbours > 1) {
//     document.write("more than 1 border");
// } else {
//     document.write("No borders");
// }

// lec 9 logical operator
let newCountry;
language = "English";
if (population < 50000000 && isIsland == false && language == "English"){
    console.log('You should live in portugal');
} else{
    console.log('Portugal does not meet your criteria');
}
// lec 10 : switch statement
switch(language){
    case 'chinese || mandarin':
        console.log('most numbers of native speakers');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('great language too: D');
        break;
}
