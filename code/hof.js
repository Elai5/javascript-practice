const addTwo = (num) => {
    return num + 2;
};

const checkCOnsistentOutput = (func, val) => {
    let checkA = val + 2;
    let checkB = func(val);

    if (checkA === checkB) {
        return checkB;
    } else {
        return "inconsistent results"
    }
};
console.log(checkCOnsistentOutput(addTwo, 4));

const artist = ['Picaso', 'Kane', "Nicki"];
artist.forEach(artist => {
    console.log(artist + 'is my favorite artist');
});
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNUmbers = things.filter(thing => {
    return typeof thing === 'number';
});
console.log(onlyNUmbers);

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator is: ', accumulator);
    console.log('THe value of currentValue is: ', currentValue);
    return accumulator + currentValue
});