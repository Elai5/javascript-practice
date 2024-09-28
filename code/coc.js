const plantNeedsWater = function(day) {
    if (day === 'wednesday') {
        return true;
    } else {
        return false;
    }
}
day = plantNeedsWater( 'wednesday')
console.log(day);

// const plantsNeedWater = day => day === 'wednesday' ? true : false;