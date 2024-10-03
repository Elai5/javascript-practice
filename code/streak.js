// Test data 1
let markMass1 = 78;  // in kg
let markHeight1 = 1.69;  // in meters
let johnMass1 = 92;  // in kg
let johnHeight1 = 1.95;  // in meters

// Test data 2
let markMass2 = 95;  // in kg
let markHeight2 = 1.88;  // in meters
let johnMass2 = 85;  // in kg
let johnHeight2 = 1.76;  // in meters

// Function to calculate BMI
function calculateBMI(mass, height) {
    return mass / (height ** 2); // or use height * height
}

// Calculate BMIs for test data 1
let markBMI1 = calculateBMI(markMass1, markHeight1);
let johnBMI1 = calculateBMI(johnMass1, johnHeight1);

// Calculate BMIs for test data 2
let markBMI2 = calculateBMI(markMass2, markHeight2);
let johnBMI2 = calculateBMI(johnMass2, johnHeight2);

// Check if Mark's BMI is higher for both test cases
let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

// Output results for test data 1
console.log("Test Data 1:");
console.log("Mark's BMI:", markBMI1.toFixed(2));
console.log("John's BMI:", johnBMI1.toFixed(2));
console.log("Does Mark have a higher BMI? " + markHigherBMI1);

// Output results for test data 2
console.log("\nTest Data 2:");
console.log("Mark's BMI:", markBMI2.toFixed(2));
console.log("John's BMI:", johnBMI2.toFixed(2));
console.log("Does Mark have a higher BMI? " + markHigherBMI2);
``