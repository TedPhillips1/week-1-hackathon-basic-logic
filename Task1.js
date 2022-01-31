console.log("im working")


 //TASK 1

// First determine variables. Player Move & Computer move

let playerMove = prompt("rock, paper or scissors");
let computerMove = "rock";

// Write the if statments to determine winners

// When computer move is rock.

if (playerMove === "rock" && computerMove === "rock"){
    alert("draw")
    
}

if (playerMove === "paper" && computerMove === "rock"){
    alert("player wins")
}

if (playerMove === "scissors" && computerMove === "rock"){
    alert("computer wins")
}

//when computer move is scissors

playerMove = prompt("rock, paper or scissors");
computerMove = "scissors";

if (playerMove === "rock" && computerMove === "scissors"){
    alert("player wins")
}

if (playerMove === "paper" && computerMove === "scissors"){
    alert("computer wins")
}

if (playerMove === "scissors" && computerMove === "scissors"){
    alert("draw")
}



//when computer move is paper

playerMove = prompt("rock, paper or scissors");
computerMove = "paper";

if (playerMove === "rock" && computerMove === "paper"){
    alert("computer wins")
}

if (playerMove === "paper" && computerMove === "paper"){
    alert("draw")
}

if (playerMove === "scissors" && computerMove === "paper"){
    alert("player wins")
}
