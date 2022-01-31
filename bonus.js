const computerChoice = ["rock", "paper", "scissors"];
let userName = prompt ("What's your name?", "Max 10 characters");

while ( /^[A-Z]/.test(userName) === false || userName.length > 10) 
    { userName = prompt("Username must start with a capital letter, and be under 10 characters")};

let playAgain = confirm(`Hello ${userName}, would you like to play Rock, Paper, Scissors?`);

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

let gameScore = { wins: 0, draws: 0, losses: 0};

while (playAgain === true) {
    let random = Math.floor(Math.random() * (computerChoice.length));

    let arrayIndex = computerChoice[random];

    let userInput = prompt(`${userName}'s turn. Choose: rock, paper or scissors?`);

    let result = getWinner(userInput, arrayIndex);

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

    playAgain = confirm(`${userName}, the current score is:
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Draws: ${gameScore.draws}

    Would you like to play again?`);
};

if (playAgain === false) {
    alert(`${userName}, the final score is:
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Draws: ${gameScore.draws}
    
    Come back next time for more fun!`);
};
