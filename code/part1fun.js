let johnMass = 78;
let johnHeight = 1.69;

let markMass = 95;
let markHeigth = 1.88;

let BMI = (johnMass / (johnHeight ** 2));
let BMI2 = (markMass / (markHeigth ** 2));
console.log(BMI);
console.log(BMI2)

// Function to calculate BMI
const calculateBMI = (mass, height) => mass / (height ** 2);

// Data for John and Mark
const johnyMass = 78, johnyHeight = 1.69;
const markyMass = 95, markyHeight = 1.88;

// Calculate BMIs using the function
const johnBMI = calculateBMI(johnyMass, johnyHeight);
const markBMI = calculateBMI(markyMass, markyHeight);

// Output the BMIs
console.log(`John's BMI: ${johnBMI.toFixed(2)}`);
console.log(`Mark's BMI: ${markBMI.toFixed(2)}`);
