let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let variable = Math.floor(Math.random() * 3) + 1;
    switch (variable) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
        default:
            return "Error"
            break;
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice between rock, paper and scissors: ")
    return choice
}



function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        displayMessage("It's a draw")
        return null
    } else if (computerChoice === "rock") {
        switch (humanChoice) {
            case "paper":
                displayMessage("You win! paper beats rock")
                return true
                break;

            case "scissors":
                displayMessage("You lose! rocks beats scissors")
                return false
                break;

            default:
                displayMessage("It's a draw")
                break;
        }
    } else if (computerChoice === "paper") {
        switch (humanChoice) {
            case "rock":
                displayMessage("You lose! paper beats rock")
                return false
                break;

            case "scissors":
                displayMessage("You win! scissors beats paper")
                return true
                break;

            default:
                displayMessage("It's a draw")
                break;
        }
    } else if (computerChoice === "scissors") {
        switch (humanChoice) {
            case "paper":
                console.log("You lose! scissors beats paper")
                return false
                break;

            case "rock":
                console.log("You win! rocks beats scissors")
                return true
                break;

            default:
                console.log("It's a draw")
                break;
        }
    }
}

function displayMessage(message) {
    const result = document.querySelector("#results")
    result.textContent = message
}

function updateScore() {
    const score = document.querySelector("#score")
    score.textContent = `Human Score: ${humanScore} \n Computer Score: ${computerScore}`
}

function checkWinner() {
    if (humanScore === 5) {
        alert("You Win!!!")
    } else if (computerScore === 5) {
        alert("Computer Wins!!")
    }
}

function reset() {
    humanScore = 0
    computerScore = 0
    updateScore()
}

// function playGame() {
//     let humanScore = 0,
//         computerScore = 0
//     for (let i = 0; i < 5; i++) {

//         let computerChoice = getComputerChoice()
//         let humanChoice = getHumanChoice()
//         let result = playRound(humanChoice, computerChoice)

//         if (result == null) {

//         } else if (result == true) {
//             humanScore++
//         } else {
//             computerScore++
//         }
//     }

//     if (humanScore > computerScore) {
//         alert(`You win your score is ${humanScore}`)
//     } else if (computerScore > humanScore) {
//         alert(`Computer win his score is ${computerScore}`)
//     } else {
//         alert("It's a draw")
//     }
//     console.log(`Human Score is ${humanScore}`)
//     console.log(`Computer Score is ${computerScore}`)
// }



document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playGame("scissors");
});

function playGame(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === true) {
        humanScore++;
    } else if (result === false) {
        computerScore++;
    }

    updateScore();
    checkWinner();
}

updateScore();








