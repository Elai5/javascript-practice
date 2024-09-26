let userName = 'Lainey';
// userName === 'Jane' ? console.log("Hello, Jane!") : console.log("Hello!");
console.log(userName ? `Hello, ${userName}!` : 'Hello');

let userQuestion = 'What is the capital city of Kenya?';
console.log(`today we ask: ${userName}, ${userQuestion}`);
// console.log(`${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// switch(randomNumber) {
//   case 0:
//   eightBall ='It is certain';
//   break;
//   case 1:
//   eightBall ='It is decidedly so';
//   break;
//   case 2:
//   eightBall = 'Reply hazy try again';
//   break;
//   case 3:
//   eightBall = 'Cannot predict now';
//   break;
//   case 4:
//   eightBall = 'Do not count on it';
//   break;
//   case 5:
//   eightBall ='My sources say no';
//   break;
//   case 6:
//   eightBall = 'Outlook not so good';
//   break;
//   default:
//   eightBall = 'Signs point to yes';
//   break;
// }
// console.log (`your eight ball says ${eightBall}`);

if (randomNumber == 1){
  eightBall ="the magic number is awsemone";
} else if (randomNumber == 3){
  eightBall ="we are the titans";
} else if (randomNumber == 2){
  eightBall = "two for two";
}else if(randomNumber == 4){
  eightBall ="four like a chair";
}else if (randomNumber == 5){
  eightBall ="one with the sanke";
} else if (randomNumber == 6){
  eightBall = "fist 6";
} else if (randomNumber == 0){
 eightBall = "Lucky number";
} else {
  eightBall = "You out of chances"
}
console.log(`you have this message ${eightBall}`)