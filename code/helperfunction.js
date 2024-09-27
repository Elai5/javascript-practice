function monitorCount(rows, columns) {
    return rows * columns;
}

function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
}
const totalCost = costOfMonitors(5, 4);
console.log(totalCost)


// function expresion
/*Another way to define a function is to use a function expression. To define a function inside an expression, we can use the function keyword. 
In a function expression, the function name is usually omitted. 
A function with no name is called an anonymous function. A function expression is often stored in a variable in order to refer to it.
 */
const plantNeedsWater = function (day) {
    if (day === 'Wednesday') {
        return true;
    } else {
        return false;
    }
};
plantNeedsWater('Tuesday');
console.log(plantNeedsWater('Tuesday'));
/*To define a function using function expressions:

defining a function expression
To define a function using arrow function notation:


Function definition can be made concise using concise arrow notation:

comparing single line and multiline arrow functions */