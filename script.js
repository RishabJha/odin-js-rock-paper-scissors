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

