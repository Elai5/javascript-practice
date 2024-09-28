const city = "New York City";
function logCitySkyline() {
    console.log(logCitySkyline());
    let skyscraper = "Empire State Building";
    return "The stars over the " + skyscraper + " in " + city;
}
/*You’ll notice that the logCitySkyline() function is able to access both variables without any problems.
 In the next exercise we’ll consider why would it be preferable to have one variable outside of a block and the other inside of a block. */

 //global variable
 const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky(){
  console.log(callMyNightSky());
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
 
};