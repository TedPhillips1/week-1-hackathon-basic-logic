// added further choices for computer, moved variable definitions to the top
const computerChoice = ["rock", "paper", "scissors", "lizard", "spock"];
let userName = prompt ("What's your name?", "Max 10 characters");
let gameScore = { wins: 0, draws: 0, losses: 0};


while ( /^[A-Z]/.test(userName) === false || userName.length > 10) 
    { userName = prompt("Username must start with a capital letter, and be under 10 characters")};


let playAgain = confirm(`Hello ${userName}, would you like to play Rock, Paper, Scissors, Lizard, Spock?`);

// added more possible outcomes to game 

function getWinner(playerMove, computerMove) {
   
   // Draws 

    if (playerMove === computerMove){
        return 0;
    }

    // Computer Wins    
   
    if (playerMove === "rock" && computerMove === "paper"){
        return -1;
    }
        
    if (playerMove === "spock" && computerMove === "paper"){
        return -1;
    }
           
    if (playerMove === "paper" && computerMove === "scissors"){
        return -1;
    }    
       
    if (playerMove === "lizard" && computerMove === "scissors"){
        return -1;
    }
        
    if (playerMove === "scissors" && computerMove === "rock"){
        return -1;
    }

    if (playerMove === "lizard" && computerMove === "rock"){
        return -1;
    }

    if (playerMove === "rock" && computerMove === "spock"){
        return -1;
    }

    if (playerMove === "scissors" && computerMove === "spock"){
        return -1;
    }
    
     if (playerMove === "paper" && computerMove === "lizard"){
        return -1;
    }    

    if (playerMove === "spock" && computerMove === "lizard"){
        return -1;
    }

    // Player Wins

    if (playerMove === "spock" && computerMove === "rock"){
        return 1;
    }

    if (playerMove === "paper" && computerMove === "rock"){
        return 1;
    }

    if (playerMove === "spock" && computerMove === "scissors"){
        return 1;
    }

    if (playerMove === "rock" && computerMove === "scissors"){
        return 1;
    }
    
    if (playerMove === "lizard" && computerMove === "paper"){
        return 1;
    }

    if (playerMove === "scissors" && computerMove === "paper"){
        return 1;
    }
    
    if (playerMove === "paper" && computerMove === "spock"){
        return 1;
    }    
    
    if (playerMove === "lizard" && computerMove === "spock"){
        return 1;
    }

    if (playerMove === "scissors" && computerMove === "lizard"){
        return 1;
    }

    if (playerMove === "rock" && computerMove === "lizard"){
        return 1;
    }

    };


// reduced number of popups by combining the game result and the continue option into one confirm option

while (playAgain === true) {
    let random = Math.floor(Math.random() * (computerChoice.length));

    let arrayIndex = computerChoice[random];

    let userInput = prompt(`${userName}'s turn. Choose: rock, paper, scissors, spock or lizard?`);

    let result = getWinner(userInput, arrayIndex);

    if (result === 0) { 
        gameScore.draws++;
        playAgain = confirm(`Computer picks ${arrayIndex}. DRAW!
        
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);

    } else if (result === 1) {
        gameScore.wins++;
        playAgain = confirm(`Computer picks ${arrayIndex}. YOU WIN!
        
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);
    }
     else if (result === -1) {
        gameScore.losses++;

        playAgain = confirm(`Computer picks ${arrayIndex}. YOU LOSE!
          
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);
     };
  
    };

if (playAgain === false) {
    alert(`${userName}, the final score is:
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Draws: ${gameScore.draws}
    
    Come back next time for more fun!`);
};
