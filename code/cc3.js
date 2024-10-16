let Dolphins = [96, 108, 89];
let Koalas = [88, 91, 110];
let averageScore = 100;


Dolphins = [97, 112, 101];
Koalas = [109, 95, 123];

Dolphins = [97, 112, 101];
Koalas = [109, 95, 96]

let averageDolphins = (Dolphins[0] + Dolphins[1] + Dolphins[2]) / 3;
console.log(`the dolphins score is: ${averageDolphins}`);
let averageKoalas = (Koalas[0] + Koalas[1] + Koalas[2]) / 3;
console.log(`the koalas average score is ${averageKoalas}`);

if (averageDolphins > averageKoalas && averageDolphins >= averageScore) {
    console.log("The Dolphins win")
} else if (averageKoalas > averageDolphins && averageKoalas >= averageScore) {
    console.log('koalas take it home')
}
else if (averageDolphins === averageKoalas && averageDolphins >= averageScore) {
    console.log("We havd a tie")
}
else {
    console.log("no team won")
}

// Dolphins = [97, 112, 101];
// Koalas = [109, 95, 123];
