let input = 'you are my sunshine';
const vowel = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    console.log(i);

    if (input[i] === 'e') {
        resultArray.push(input[i])
    }

    for (let j = 0; j < vowel.length; j++) {
        console.log(j)
    }
    resultArray.push(input[i])
    console.log(resultArray)
}
// console.log(input.length)



