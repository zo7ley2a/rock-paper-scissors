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

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter your weapon!").toLowerCase();
    let computerSelection = getComputerChoice();
    let currentRound = playRound(playerSelection, computerSelection);
    playerScore += currentRound[1];
    computerScore += currentRound[2];
    console.log(currentRound[0]);
  }
  if (playerScore > computerScore) {
    console.log("You Won The Game!");
  } else if (computerScore > playerScore) {
    console.log("You Lost The Game!");
  } else {
    console.log("No One Won This Game!");
  }
}

game();
