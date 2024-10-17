//we start by adding two arrays for the two teams with diffrent values.

let shark = [120, 130, 105, 100, 115];
let dolphin = [125, 90, 100, 120, 95];
// we then use math function the min to sample out the smallest value in the list of array
// we create two so that we dont run into errors, and treat ech component as an individual.
let smallestScoreShark = Math.min(...shark);
let smallestScoreDolphin = Math.min(...dolphin);
//we have used the rest parameter(...shark) to insicate that we ae accesing the elements inside the array
// as an individual
// The spread operator (...shark) is used here to "spread" the elements of the shark array
// into individual arguments for the Math.min function.
shark =
    shark.reduce((newShark, currentElement) => {
        if (currentElement !== smallestScoreShark) {
            newShark.push(currentElement);
        }
        return newShark;
    }, [])
console.log(shark)
// we start by reinitializing shark. we use the reduce funcion to iterate through the Array
// we add a n accumlator with the name newSHark, and current Element as our parameters, using the arrow function
// we proceed to use a conditional statement that checks if currentElement is not the smallestScore Iin shark
// we pass the argument, we push all the elements in the aray to new shark. initialy it is set to 
// an empty array so that it goes over the shark and stores the first valu,e then iterates to the secong and so on till it finds the smalles and reaches the end.
//  after which we use return since its a function and later on log log shark

// Check if the current element is not the smallest score.
// If not, add the current element to the newShark array.
// The reduce function iterates through the array. 
// 'newShark' is the accumulator that starts as an empty array, and 'currentElement' is each element being processed.
// If the current element is not the smallest score, it's pushed into the newShark array.
// The result is a new array without the smallest score.
dolphin =
    dolphin.reduce((newDolphin, currentElement) => {
        if (currentElement !== smallestScoreDolphin) {
            newDolphin.push(currentElement);
        }
        return newDolphin;
    }, [])
console.log(dolphin)
// /we do the same for dolphin
// when calculatin the average, we use now the spread parameter, as we are passing the values as an individual
// using arrow function, our two parameters being sum and scores. we use return
// scores.reduce as reduce iterates through the array, pass in arg sum + score a , and 0 as the initial value of sum is set to 0.
//  we then later divide by scores.length as it checks num of items in the scores and divides by it.Math


let calcAverage = (...scores) => {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};
// To calculate the average, we use a rest parameter (...scores) to accept any number of scores.
// The arrow function takes 'scores' (an array of values), sums them using reduce, and divides by the length.


let sharkAvg = calcAverage(...shark)
console.log(sharkAvg);
let dolphinAvg = calcAverage(...dolphin)
console.log(dolphinAvg);
// When calculating the individual averages, the spread operator is used to pass each array's elements
// as separate arguments to the calcAverage function.