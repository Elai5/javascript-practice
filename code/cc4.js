let tip;
let bill = 275;
let total = (tip + bill)
bill = 40;
// bill = 430;


bill >= 50 && bill <= 300
    ? console.log(`the bill was ${bill}, the tip was ${bill * 0.15}, and the total is ${bill + (bill * 0.15)}`)
    : console.log(`the bill was ${bill}, the tip was ${bill * 0.15}, and the total is ${bill + (bill * 0.02)}`);

// if (bill >= 50 && bill <= 300) {
//     tip = (bill * 0.15);

// } else {
//     tip = (bill * 0.02);
// }

// console.log(tip);


let team1 = [44, 23, 71, 56];
let team2 = [65, 54, 49, 103];

let smallestScoreTeam1 = Math.min(...team1);
let smallestScoreTeam2 = Math.min(...team2);

team1 =
    team1.reduce((newTeam1, currentElement) => {
        if (currentElement !== smallestScoreTeam1) {
            newTeam1.push(currentElement);
        }
        return newTeam1
    }, [])
console.log(team1)

team2 =
    team2.reduce((newTeam2, currentElement) => {
        if (currentElement !== smallestScoreTeam2) {
            newTeam2.push(currentElement);
        }
        return newTeam2;
    }, [])
console.log(team2);

calcAverage = (...values) => {
    return values.reduce((sum, values) => sum + values, 0) / values.length;
};
let team1Avg = calcAverage(...team1)
console.log(team1Avg)