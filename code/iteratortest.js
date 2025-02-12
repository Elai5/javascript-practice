// “Given an array of numbers, perform the following tasks using appropriate array iterator methods:

// Use the filter method to create a new array containing only the even numbers.
// Use the map method to create a new array where each number is squared.
// Use the reduce method to calculate the sum of all numbers in the array.

const numbers = [10, 13, 6, 28, 97];
const evenNum = numbers.filter(numbers => {
    if (numbers % 2 === 0)
        return numbers
});
console.log(evenNum);

const squareNum = numbers.map(numbers => {
    return numbers * numbers
});
console.log(squareNum);

const sumNum = numbers.reduce((accumulator, curentValue) => {
    return accumulator + curentValue
});
console.log(sumNum);

// Given an array of numbers, first filter out the odd numbers, 
// and then square the remaining even numbers. Use method chaining to accomplish this task and return the resulting array.

const oddNum = numbers
    .filter(numbers => numbers % 2 === 1)
    .map(numbers => numbers * numbers)
console.log(oddNum);

// Given an array of strings, first filter out the strings that have fewer than 5 characters, 
// and then convert the remaining strings to uppercase.Use method chaining to achieve this and return the resulting array.

const myWords = ['lake', 'sammy', 'passion', 'cat', 'chair', 'boy'];
const fewWords = myWords
    .filter(word => {
        return word.length < 5
    })
    .map(word => {
        return word.toUpperCase();
    });
console.log(fewWords);

// Given an array of objects representing products, each with a price and category,
// filter out the products that belong to the ‘electronics’ category, and then extract the price of each remaining product.
// Use method chaining to accomplish this and return an array of prices.
// This question tests the ability to use filter to select objects based on a property and map to
// transform the selected objects into a different form.

const products = [
    { name: 'Laptop', price: 1000, category: 'electronics' },
    { name: 'shirt', price: 500, category: 'clothing' },
    { name: 'phone', price: 300, category: 'electronics' },
    { name: 'book', price: 20, category: 'stationery' }
];
const notElectronic = products
    .filter(product =>
        product.category !== 'electronics')
    .map(product =>
        product.price
    );
console.log(notElectronic);

// Given an array of student objects, each with a name and score, filter out the students who scored less than 70,
// and then create a new array containing only the names of the students who passed.Use method chaining to achieve this.

const students = [
    { name: 'Elaine', score: 80 },
    { name: 'YVette', score: 60 },
    { name: 'Abayo', score: 30 },
    { name: 'Mish', score: 70 },
    { name: 'Mike', score: 88 }
];

const belowAverage = students
    .filter(students =>
        students.score >= 70)
    .map(students =>
        students.name
    );
console.log(belowAverage);
// console.log(students)

// Given an array of employee objects, each with a name and salary, filter out employees with a salary less than $50,000, 
// and then create a new array containing the names of the remaining employees in uppercase. Use method chaining to achieve this.

const employee = [
    { name: 'Cyrille', salary: 50000 },
    { name: 'Shanize', salary: 49000 },
    { name: 'Tom', salary: 5000 },
    { name: 'mary', salary: 30000 },
    { name: 'Banes', salary: 70000 }
];
const lessSalary = employee
    .filter(employee =>
        employee.salary < 50000
    ).map(employee =>
        employee.name.toUpperCase()
    );
console.log(lessSalary);

// Given an array of words, use the forEach method to log each word along with its index and the entire array.
// Use the optional arguments of the forEach method to achieve this. Format the output as: ‘Word: [word], Index: [index], Array: [array]’.”

const words = ['passion', 'mango', 'Bubble', 'cookie'];
words.forEach((element, index, array) =>
    console.log(`Word: ${element}, Index ${index}, array:[${array.join(', ')}]`));
