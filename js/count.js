/* the CountToTen function does the followint thing:
* initializes variable called count
*Starts a loop by checking the value of count to make
sure it's less than 10
* Adds 1 to the value of count
* Appends the the current value of count, followed by a
line break, to the paragraph with id='theCount'
* Starts the loop over
*/

function countToTen() {
    var count = 0;
    while (count <10) {
        count++;
        document.getElementById("theCount").innerHTML += count + "<br>"
    }
}