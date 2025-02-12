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
console.log(notElectronic)