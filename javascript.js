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
  takes the player's choice and compares to computers, returns string declaring a winner.
  1. Map out conditions
  2. return string declaring winner
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

/*game()
  plays a game of 5 rounds, tracks the score and reports the winner at the end
  1. call playRound when clicked
  2. display results of each round in a div and keep a score for each player
  3. once a player reaches 5 points announce the winner
*/
function game() {
  let playerWin = 0;
  let computerWin = 0;
  let output = '';
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
     
     output = `player score: ${playerWin}  computer score: ${computerWin}`;
     scoreboard.textContent = output;
     if(playerWin > 4) {
       output = "Congratulations you're the winner!";
       scoreboard.textContent = output; 
     }
     if(computerWin > 4) {
       output = "Oof! You've lost! Better luck next time!";
       scoreboard.textContent = output;
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

     output = `player score: ${playerWin}  computer score: ${computerWin}`;
     scoreboard.textContent = output;
     if(playerWin > 4) {
       output = "Congratulations you're the winner!";
       scoreboard.textContent = output;
     }
     if(computerWin > 4) {
       output = "Oof! You've lost! Better luck next time!";
       scoreboard.textContent = output;
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

     output = `player score: ${playerWin}  computer score: ${computerWin}`;
     scoreboard.textContent = output;
     if(playerWin > 4) {
       output = "Congratulations you're the winner!";
       scoreboard.textContent = output;
     }
     if(computerWin > 4) {
       output = "Oof! You've lost! Better luck next time!";
       scoreboard.textContent = output;
     } 
  });
  
}

game();
