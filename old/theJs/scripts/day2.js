const obj = {};
obj.x = 3;
console.log(obj);
console.log(obj.x);
// const status = age >= 18 ? "adult" : "minor";

const x = [0, 1, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
    console.log(`a[${i}][${j}]= ${a[i][j]}`);
}