/*Codecademy’s annual race is approaching,
and you’ve been tasked with writing a program to
register runners and provide them with race day 
 instructions. The registration process involves adult 
 runners (over 18 years) and youth runners 
 (under 18 years), with different race number 
 and start time assignments based on their age and registration timing.
 First, race numbers should be assigned randomly, ensuring that early adult 
 registrants receive a race number at or above 1000, while all others receive a number below 1000. 
 Additionally, adult registrants will race at either 9:30 am or 11:00 am, 
 with early adults starting at 9:30 am and late adults at 11:00 am. Youth registrants, 
 regardless of registration timing, will race at 12:30 pm. The program must also handle 
 runners who are exactly 18 years old by prompting them to see the registration desk. 
 Therefore, you are required to create variables indicating registration status and 
 runner age, implement control flow statements to determine race numbers and times, and 
 log appropriate messages to the console based on these conditions.*/

let raceNumber = Math.floor(Math.random() * 1000);
let isRunnerRegisteredEarly = true;
let runnersAge = 18;

if (runnersAge >= 18 && isRunnerRegisteredEarly == true){
  raceNumber += 1000;
} 

if(runnersAge >= 18 && isRunnerRegisteredEarly == true){
  console.log(`${raceNumber} will start at 9.30am`);
} else if (runnersAge >=18 && isRunnerRegisteredEarly == false){
  console.log(`${raceNumber}will start race at 11.00am`)
} else if (runnersAge < 18){
  console.log(`${raceNumber} will start race at 1.30pm`);
} else {
  console.log('visit the registration desk');
}