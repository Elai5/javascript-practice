function sayHi(name) {
    console.log('hello mate ' + name);
}
sayHi('laine');

function multiply(num1, num2) {
    // return num1 * num2;
}
console.log(multiply(2, 5));

// with 100
let billValue = 44;
let tip;

function calcTip() {
    if (billValue > 50 && billValue < 300) {
        tip = billValue * 0.15;
    } else {
        tip = billValue * 0.2;
    }
    return tip

}
console.log(calcTip());

