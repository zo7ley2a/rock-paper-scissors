function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * (3 - 0) + 0)];
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let message = "";
  let result = [];
  if (playerSelection === computerSelection) {
    message = "It's a Tie!";
    result = [message, 0, 0];
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    message = `You Won! ${playerSelection} beats ${computerSelection}`;
    result = [message, 1, 0];
  } else {
    message = `You Lost! ${computerSelection} beats ${playerSelection}`;
    result = [message, 0, 1];
  }
  return result;
}
