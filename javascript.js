/*Rock Paper Scissors*/

/*computerPlay()
  Randomly picks 'Rock' 'Paper' 'Scissors' and returns that string
  1. Generate random int from 1 to 3
  2. if 1 return rock, 2 return paper, 3 return scissors 
*/
function computerPlay() {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if(randNum === 1) {
    return 'rock';
  } else if(randNum === 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

/*playRound(playerChoice, computerChoice)
  takes the player's choice and compares to computers, returns int declaring a winner.
  1. Map out conditions
  2. return int declaring winner
*/
function playRound(playerChoice, computerChoice) {

  if(playerChoice === computerChoice) {
    return 0;
  } else if(playerChoice.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    return 1;
  } else if(playerChoice.toLowerCase() === 'paper' && computerChoice === 'rock') {
    return 1;
  } else if(playerChoice.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    return 1;
  } else {
    return 2;
  }
}
let playerWin = 0;
let computerWin = 0;
let draw = 0;
const rbtn = document.querySelector('#rock');
const pbtn = document.querySelector('#paper');
const sbtn = document.querySelector('#scissor'); 
const scoreboard = document.querySelector('#scoreboard');  

rbtn.addEventListener("click", function() {
  let result = playRound('rock', computerPlay());
  if(result === 1){
    playerWin++;
  }
  if(result === 2){
    computerWin++;
  }
  if(result === 0){
    draw++;
  }
  displayResults();
  if(playerWin > 4){
    printWin(1);
    reset();
  }
  if(computerWin > 4){
    printWin(0);
    reset();
  }
});

pbtn.addEventListener("click", function() {
  let result = playRound('paper', computerPlay());
  if(result === 1){
    playerWin++;
  }
  if(result === 2){
    computerWin++;
  }
  if(result === 0){
    draw++;
  }
  displayResults();
  if(playerWin > 4){
    printWin(1);
    reset();
  }
  if(computerWin > 4){
    printWin(0);
    reset();
  }
});

sbtn.addEventListener("click", function() {
  let result = playRound('scissor', computerPlay());
  if(result === 1){
    playerWin++;
  }
  if(result === 2){
    computerWin++;
  }
  if(result === 0){
    draw++;
  }

  displayResults();

  if(playerWin > 4){
    printWin(1);
    reset();
  }
  if(computerWin > 4){
    printWin(0);
    reset();
  }
}); 

function displayResults() {
  let output = `player score: ${playerWin}  computer score: ${computerWin} draws: ${draw}`;
  scoreboard.textContent = output;
}

function printWin(whoWon) {
  let output = '';
  if(whoWon === 1){  
    output = "Congratulations, you've won!";
    scoreboard.textContent = output;
  }
  if(whoWon === 0){  
    output = "Oof, you've lost! Better luck next time!";
    scoreboard.textContent = output;
  }
}

function reset() {
  playerWin = 0;
  computerWin = 0;
  draw = 0;
}
