/** @format */

let spaceship = {
  crew: {
    captain: {
      name: "lily",
      degree: "Computer Science",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Engineering",
      agree() {
        console.log("I agree captain");
      },
      medic: {
        surgeon: {
          name: "alucard",
          degree: "scientist",
          powerFuel() {
            console.log("Tank is full");
          },
          nurse: {
            name: "amily",
            degree: "pharmacist",
          },
        },
      },
    },
  },
};
// for (let crewMember in spaceship.crew) {
//   console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
// }
for (let medicMember in spaceship.crew["chief officer"].medic) {
  console.log(
    `${medicMember}: ${spaceship.crew["chief officer"].medic[medicMember].name}`
  );
}
