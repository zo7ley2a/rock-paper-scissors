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
