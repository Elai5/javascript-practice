// in this practice, we learn about object methods in js.
//objects method are invoked by appending objects with name. 
// in this istance, we have the retreat message, we create object alienship with method retreat
// and takeoff, bth methods are separated by comma,and then invoked at the end. 

let retreatMessage =
  "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};
alienShip.retreat();
alienShip.takeOff();
