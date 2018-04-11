
	let playerScore = 0; // should only be set to 0 if the game/page is reset, or there is a winner
	let computerScore = 0; // should only be set to 0 if the game/page is reset, or there is a winner


	const buttons = document.querySelectorAll('.btn');

	function computerPlay() {
    	let compChoices = ["ROCK", "PAPER", "SCISSORS"];
		return compChoices[Math.floor(Math.random()*compChoices.length)]; // Generates random number between 0-2 and selects the corresponding array element
	}

	let computerSelection = computerPlay();
	let playerSelection = null;

	  	buttons.forEach((button) => {
 		button.addEventListener('click', (e) => {
   			playerSelection = button.id;
   			game();
	 }); });

	// singleRound(playerSelection, computerSelection); // Runs each loop of the game
function game() {

	document.querySelector('#gameresult').innerHTML = '';

	singleRound(playerSelection, computerSelection);
	winner()

	function singleRound(playerSelection, computerSelection) {

		computerSelection = computerPlay();

		if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
			playerScore += 1;
			document.querySelector('#winningmsg').innerHTML = "You Win! Rock Smashes Scissors!";
			document.querySelector('#playerscore').innerHTML = playerScore;

		} else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
			computerScore += 1;
			document.querySelector('#winningmsg').innerHTML = "You Lose! Paper Covers Rock!";
			document.querySelector('#computerscore').innerHTML = computerScore;

		} else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
			document.querySelector('#winningmsg').innerHTML = "Tie! Rock Can't Beat Rock.";

		} else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
			computerScore += 1;
			document.querySelector('#winningmsg').innerHTML = "You Lose! Scissors Cuts Paper Up!";
			document.querySelector('#computerscore').innerHTML = computerScore;

		} else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
			playerScore += 1;
			document.querySelector('#winningmsg').innerHTML = "You Win! Paper Covers Rock!";
			document.querySelector('#playerscore').innerHTML = playerScore;

		} else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
			document.querySelector('#winningmsg').innerHTML = "Tie! Keep stacking paper for your printer";

		} else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
			document.querySelector('#winningmsg').innerHTML = "Tie! You just Scissored Each Other!";

		} else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
			computerScore += 1;
			document.querySelector('#winningmsg').innerHTML = "You Lose! Rock Smashes Scissors";
			document.querySelector('#computerscore').innerHTML = computerScore;

		} else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
			playerScore += 1;
			document.querySelector('#winningmsg').innerHTML = "You Win! Scissors Cut Paper Up!";
			document.querySelector('#playerscore').innerHTML = playerScore;

		} else {
			return;
		}
	}

		function winner() {
		if (playerScore === 5) {
			document.querySelector('#gameresult').innerHTML = "You win! " + "Player: " + " " + playerScore + " " + "Computer: " + " " + computerScore;
			playerScore = 0;
			computerScore = 0;
			document.querySelector('#playerscore').innerHTML = playerScore;
			document.querySelector('#computerscore').innerHTML = computerScore;
		} else if (computerScore === 5) {
			document.querySelector('#gameresult').innerHTML = "You lose! " + "Player: " + " " + playerScore + " " + "Computer: " + " " + computerScore;
			playerScore = 0;
			computerScore = 0;
			document.querySelector('#playerscore').innerHTML = playerScore;
			document.querySelector('#computerscore').innerHTML = computerScore;
		}	else { 
			return;
		}
	}
}
