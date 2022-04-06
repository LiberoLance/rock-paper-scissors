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

/*game()
  plays a game of 5 rounds, tracks the score and reports the winner at the end
  1. loop 5 times calling playRound()
  2. prompt() the user to update their choice for each round
  3. increment a counter for each number of wins
  4. compare winnings and declare a winner after the loop ends
*/

/*test code here*/
console.log(computerPlay())
