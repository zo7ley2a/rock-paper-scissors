function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let message = "";
  let resultOfRound = [];
  if (playerSelection === computerSelection) {
    message = "It's a Tie!";
    resultOfRound = [message, 0, 0];
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    message = `You Won! ${playerSelection} beats ${computerSelection}`;
    resultOfRound = [message, 1, 0];
  } else {
    message = `You Lost! ${computerSelection} beats ${playerSelection}`;
    resultOfRound = [message, 0, 1];
  }
    return resultOfRound;
}

function activateTheButtons() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", handleTheRound);
  });
}

function deactivateTheButtons() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.removeEventListener("click", handleTheRound);
  });
}

function handleTheRound(){
  let result = playRound(this.textContent, getComputerChoice());
  game(result);
}

let playerScore = 0;
let computerScore = 0;

activateTheButtons();

function game (result){
  let resultArea = document.querySelector('.result-area');
  if (playerScore === 5){

  } else if (computerScore === 5){

  }

  playerScore += result[1];
  computerScore += result[2];
  let messageOfRound = document.createElement('p');
  messageOfRound.textContent = result[0];
  resultArea.appendChild(messageOfRound);
  deactivateTheButtons();
}
