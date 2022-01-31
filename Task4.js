
// make an array with computer choices

const computerChoice = ["rock", "paper", "scissors"];

// we need to determine a random choice using a random number (random number will be same as array length)

//Math.floor - rounds down
let random = Math.floor    (Math.random() * (computerChoice.length))

// this random number will determine the index of the array.

let arrayIndex = computerChoice[random];


// then insert random choice from array as computer choice in the function. 



let userInput = prompt("Choose: rock, paper or scissors?");

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
};


let result = getWinner(userInput, arrayIndex);

if (result === 0) { alert(`Computer picks ${arrayIndex}. DRAW!`)} else if (result === 1) {alert(`Computer picks ${arrayIndex}. YOU WIN!`)} else if (result === -1) {alert(`Computer picks ${arrayIndex}. YOU LOSE!`)}



