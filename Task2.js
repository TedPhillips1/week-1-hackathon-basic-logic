//Task 2

// use our if statements in our function 

// function should return 1(win). 0(draw). -1(loss).
    
//function should have two inputs (playerMove, computerMove)

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

//define a variable that calls the function and returns result

let result = getWinner("scissors", "scissors");

//get result in console

console.log(result);