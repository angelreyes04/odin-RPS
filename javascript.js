const options = ["rock", "paper", "scissors"];
function getComputerChoice(){
    return options[(Math.floor(Math.random() * options.length))];
}

function getHumanChoice(){
    let decision = prompt("Choose rock, paper, or scissors");
    decision = decision.toLowerCase();

    if (decision === "rock" || "paper" || "scissors") {
        return decision;
    } else {
        alert("Invalid choice. Try again");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("It's a tie!");
        return "It's a tie";
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You win!");
        return "You win!";
    } else {
        console.log("You lose!");
        return "You lose!";
    }
}

function playGame(){
    let humanScore, computerScore = 0;
    const totalRounds = 5;

    for (let round = 1; round <= totalRounds; round++){
        humanChoice = getHumanChoice;
        computerChoice = getComputerChoice;

        const result = playRound(humanChoice, computerChoice);

        if (result === "You win!") {
            alert("You win this round!");
            humanScore++;
        } else if (result === "You lose!") {
            alert("You lose this round!");
            computerScore++;
        } else {
            alert("It's a tie!");
        }
    }

    if (humanScore > computerScore) {
        alert("You win the game!");
    } else if (humanScore < computerScore) {
        alert("You lose the game!");
    } else {
        alert("The game is a tie!");
    }
}