let playAgain = confirm("Would you like to play?");

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


// make a while loop
while (playAgain === true) {
    let random = Math.floor(Math.random() * (computerChoice.length));

    let arrayIndex = computerChoice[random];

    let userInput = prompt("Choose: rock, paper or scissors?");

    let result = getWinner(userInput, arrayIndex);

    if (result === 0) { 
        alert(`Computer picks ${arrayIndex}. DRAW!`)
    } else if (result === 1) {
        alert(`Computer picks ${arrayIndex}. YOU WIN!`)}
     else if (result === -1) {
         alert(`Computer picks ${arrayIndex}. YOU LOSE!`)};

// replay confirm
    playAgain = confirm("Do you want to play again?");
} 

if (playAgain === false) {
    alert("Sorry to hear that, come back next time for more fun!")
}