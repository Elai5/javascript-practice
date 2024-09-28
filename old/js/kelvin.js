//this sets kelvin as a constant variable
const kelvin = 0;
//sets rule for converting kelvin to celsius
const celsius = kelvin - 273;
//convers celsius to farenheit
let fahrenheit = celsius * (9/5) + 32;
//convert answer to a whole number
 fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahreinheit.`);

//convers celsius no newton
newton = celsius * (33/100);
//rounds off answer to whole number
newton = Math.floor(newton);

//prints the answer
console.log(`the temperature is ${newton} degrees Newton`)


