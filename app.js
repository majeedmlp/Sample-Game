const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_PLAYER_WINS = " PLAYER WINS! ";
const RESULT_COMPUTER_WINS = "COMPUTER WINS! ";
const RESULT_DRAW = "DRAW";

let gameIsRunning = false;

const getPlayerchoice = () => {
  const selection = prompt(
    `${ROCK}, ${PAPER} or ${SCISSOR}?`,
    " "
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert(` Invalid choice. We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoice) =>
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSOR) ||
      (cChoice === SCISSOR && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("..Game is now loading ");
  const playerSelection = getPlayerchoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  let message = ` You picked ${playerSelection}, computer picked ${computerSelection}`;
  if (winner === RESULT_DRAW) {
    message = message + ` therefore it's DRAW!`;
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + ` you have WON!`;
  } else {
    message = message + ` computer has WON!`;
  }
  alert(message);
  gameIsRunning = false;
});
