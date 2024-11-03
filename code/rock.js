const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (['rock', 'paper', 'scissors'].includes(userInput)) {
        return userInput;
    } else {
        console.log('Error! please select a valid input.')
        return null
    }
}
// getUserChoice('rock')
console.log(getUserChoice('ock'))