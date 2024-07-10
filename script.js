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
        console.log("It's a draw")
        return null
    } else if (computerChoice === "rock") {
        switch (humanChoice) {
            case "paper":
                console.log("You win! paper beats rock")
                return true
                break;

            case "scissors":
                console.log("You lose! rocks beats scissors")
                return false
                break;

            default:
                console.log("It's a draw")
                break;
        }
    } else if (computerChoice === "paper") {
        switch (humanChoice) {
            case "rock":
                console.log("You lose! paper beats rock")
                return false
                break;

            case "scissors":
                console.log("You win! scissors beats paper")
                return true
                break;

            default:
                console.log("It's a draw")
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

function playGame() {
    let humanScore = 0,
        computerScore = 0
    for (let i = 0; i < 5; i++) {

        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        let result = playRound(humanChoice, computerChoice)

        if (result == null) {

        } else if (result == true) {
            humanScore++
        } else {
            computerScore++
        }
    }

    if (humanScore > computerScore) {
        alert(`You win your score is ${humanScore}`)
    } else if (computerScore > humanScore) {
        alert(`Computer win his score is ${computerScore}`)
    } else {
        alert("It's a draw")
    }
    console.log(`Human Score is ${humanScore}`)
    console.log(`Computer Score is ${computerScore}`)
}


playGame()


