let playAgain = confirm("Would you like to play Rock, Paper, Scissors?");

function getWinner(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "paper"){
        return -1;
    }
    
    if (playerMove === "paper" && computerMove === "paper"){
        return 0;
    }
    
    if (playerMove === "scissors" && computerMove === "paper"){
        return 1;
    }
    
    if (playerMove === "rock" && computerMove === "scissors"){
        return 1;
    }
    
    if (playerMove === "paper" && computerMove === "scissors"){
        return -1;
    }
    
    if (playerMove === "scissors" && computerMove === "scissors"){
        return 0;
    }

    if (playerMove === "rock" && computerMove === "rock"){
        return 0;
        
    }
    
    if (playerMove === "paper" && computerMove === "rock"){
        return 1;
    }
    
    if (playerMove === "scissors" && computerMove === "rock"){
        return -1;
    }
} 

const computerChoice = ["rock", "paper", "scissors"];

// use an object to track wins, draws, losses
let gameScore = { wins: 0, draws: 0, losses: 0};

while (playAgain === true) {
    let random = Math.floor(Math.random() * (computerChoice.length));

    let arrayIndex = computerChoice[random];

    let userInput = prompt("Choose: rock, paper or scissors?");

    let result = getWinner(userInput, arrayIndex);

// change the value of a pair in object after each result
// print that into the alert at the end

    if (result === 0) { 
        alert(`Computer picks ${arrayIndex}. DRAW!`);
        gameScore.draws++;
    } else if (result === 1) {
        alert(`Computer picks ${arrayIndex}. YOU WIN!`);
        gameScore.wins++;
    }
     else if (result === -1) {
         alert(`Computer picks ${arrayIndex}. YOU LOSE!`);
         gameScore.losses++;
     };

    playAgain = confirm(`The current score is:
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Draws: ${gameScore.draws}

    Would you like to play again?`);
};

if (playAgain === false) {
    alert(`The final score is:
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Draws: ${gameScore.draws}
    
    Come back next time for more fun!`);
};