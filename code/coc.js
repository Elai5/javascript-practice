const plantNeedsWater = function (day) {
    if (day === 'wednesday') {
        return true;
    } else {
        return false;
    }
}
day = plantNeedsWater('wednesday')
console.log(day);

// const plantsNeedWater = day => day === 'wedesday' ? true : false;

let age = 39;
const isHoliday = false;

if (!isHoliday && (age <= 6 || age >= 65)) {
   
    console.log('Discount');
} else {
    console.log('No Discount');
}