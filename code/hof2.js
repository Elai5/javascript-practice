const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce((acumulator, currentValue
) => {
    return acumulator + currentValue;
}, initializer);
console.log(addItUp);

const sum = (x, y) => x + y;
sum.alias = 'summation';

let multiplyTwoValues = (val1, val2) => {
    return val1 * val2;
}

let square = (val) => {
    return val * val;
}

let getFUnctionString = (func) => {
    return func.toString()
}

let result = multiplyTwoValues(2, 2);
square(result);

const increment = (salary) => {
    const revisedSalary = salary + 5;
    console.log(revisedSalary);
    return revisedSalary;
}
const incrementHolder = increment;

const oddNumbers = [1, 3, 5, 7];
const evenNumbers = oddNumbers.ma(number => {
    return number * 2
});