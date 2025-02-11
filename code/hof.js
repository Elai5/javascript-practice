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
console.log(checkCOnsistentOutput(addTwo, 4))