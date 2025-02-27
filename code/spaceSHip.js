let spaceShip = {
  passenger: null,
  telescope: {
    yearBuil: 2018,
    model: "91031-XLT",
    focalength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      favoriteFoods: ["cookies", "cakes", "carrot"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};
let capFave = spaceShip.crew.captain["favoriteFoods"][0];
spaceShip.passenger = [
  {
    name: "Elaine",
  },
];
let firstPassenger = spaceship.passengers[0];
console.log(firstPassenger);