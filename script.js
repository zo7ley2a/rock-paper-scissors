
function getComputerChoice(){
    let choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[Math.floor(Math.random() * (3 - 0) + 0)];
    return computerChoice;
}
