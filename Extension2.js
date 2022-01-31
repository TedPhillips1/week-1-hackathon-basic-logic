let userName = prompt ("What's your name?", "Max 10 characters");
const computerChoice = ["rock", "paper", "scissors", "lizard", "spock"];
let gameScore = { wins: 0, draws: 0, losses: 0};

// variables to declare options (the array) that would cause the playerMove (nameLose) to be beaten
const scissorsLose = ["rock", "spock"]
const rockLose = ["paper", "spock"]
const paperLose = ["lizard", "scissors"]
const spockLose = ["paper", "lizard"]
const lizardLose = ["rock", "scissors"]


while ( /^[A-Z]/.test(userName) === false || userName.length > 10) 
    { userName = prompt("Username must start with a capital letter, and be under 10 characters")};


let playAgain = confirm(`Hello ${userName}, would you like to play Rock, Paper, Scissors, Lizard, Spock?`);

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


while (playAgain === true) {

    // used Math.random() to generate a number between 0 and 1, then choose to play fair or not according to whether it was more or less than 0.5. 
    // Changing the probability of computer winning is as simple as adjusting the numbers here. So 0.25 for the fairGame option to allow 75% computer wins. Or 0.1 for the fairGame (and 0.9 for notFair)

        //FAIR GAME
     if (Math.random() >= 0.5) {
        console.log("I'm playing fair!")

        //picks random answer here
        let random = Math.floor(Math.random() * (computerChoice.length));
        let fairGame = computerChoice[random];
        let userInput = prompt(`${userName}'s turn. Choose: rock, paper, scissors, spock or lizard?`);
        let result = getWinner(userInput, fairGame);

        if (result === 0) { 
        gameScore.draws++;
        playAgain = confirm(`Computer picks ${fairGame}. DRAW!
        
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);

        } else if (result === 1) {
        gameScore.wins++;
        playAgain = confirm(`Computer picks ${fairGame}. YOU WIN!
        
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);
        } else if (result === -1) {
        gameScore.losses++;

        playAgain = confirm(`Computer picks ${fairGame}. YOU LOSE!);
          
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);
        };
  
        // NOT FAIR GAME
    } else if (Math.random() < 0.5) { 
        console.log("I'M CHEATING!")
        let userInput = prompt(`${userName}'s turn. Choose: rock, paper, scissors, spock or lizard?`);
        let notFair = 0
        // picks a random answer that guarantees computer wins, from fixed variables at the beginning
        if (userInput === "rock") { 
            let random = Math.floor(Math.random() * (rockLose.length));
            notFair = rockLose[random];
        } else if (userInput === "paper") {
            let random = Math.floor(Math.random() * (paperLose.length));
            notFair = paperLose[random];
        } else if (userInput === "scissors") {
            let random = Math.floor(Math.random() * (scissorsLose.length));
            notFair = scissorsLose[random];
        } else if (userInput === "spock") {
            let random = Math.floor(Math.random() * (spockLose.length));
            notFair = spockLose[random];
        } else if (userInput === "lizard") {
            let random = Math.floor(Math.random() * (lizardLose.length));
            notFair = lizardLose[random];
        }

        let result = getWinner(userInput, notFair);

        if (result === 0) { 
        gameScore.draws++;
        playAgain = confirm(`Computer picks ${notFair}. DRAW!
        
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);

        } else if (result === 1) {
        gameScore.wins++;
        playAgain = confirm(`Computer picks ${notFair}. YOU WIN!
        
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);
        } else if (result === -1) {
        gameScore.losses++;

        playAgain = confirm(`Computer picks ${notFair}. YOU LOSE!
          
        The current score is:
        Wins: ${gameScore.wins}
        Losses: ${gameScore.losses}
        Draws: ${gameScore.draws}

        Would you like to play again ${userName}?`);
        };
    }
};

if (playAgain === false) {
    alert(`${userName}, the final score is:
    Wins: ${gameScore.wins}
    Losses: ${gameScore.losses}
    Draws: ${gameScore.draws}
    
    Come back next time for more fun!`);
};
