let shark = [120, 130, 105, 100, 115];
let dolphin = [125, 90, 100, 120, 95];

let smallestScoreShark = Math.min(...shark);
let smallestScoreDolphin = Math.min(...dolphin);


shark =
    shark.reduce((newShark, currentElement) => {
        if (currentElement !== smallestScoreShark) {
            newShark.push(currentElement);
        }
        return newShark;
    }, [])
console.log(shark)
dolphin =
    dolphin.reduce((newDolphin, currentElement) => {
        if (currentElement !== smallestScoreDolphin) {
            newDolphin.push(currentElement);
        }
        return newDolphin;
    }, [])
console.log(dolphin)


let calcAverage = (...scores) => {
    return scores.reduce((sum, score) => sum + score, 0) / scores.length;
};
let sharkAvg = calcAverage(...shark)
console.log(sharkAvg);
let dolphinAvg = calcAverage(...dolphin)
console.log(dolphinAvg);