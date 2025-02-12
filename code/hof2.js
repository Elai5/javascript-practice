const nums = [1, 2, 3, 4];
const initializer = 90;

const addItUp = nums.reduce((acumulator, currentValue
) => {
    return acumulator + currentValue;
}, initializer);
console.log(addItUp);