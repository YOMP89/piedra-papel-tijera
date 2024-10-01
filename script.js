const choices = ['piedra', 'papel', 'tijera'];
const playerScoreElem = document.getElementById('playerScore');
const computerScoreElem = document.getElementById('computerScore');
const resultElem = document.getElementById('result');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate!";
    } else if (
        (playerSelection === 'piedra' && computerSelection === 'tijera') ||
        (playerSelection === 'papel' && computerSelection === 'piedra') ||
        (playerSelection === 'tijera' && computerSelection === 'papel')
    ) {
        playerScore++;
        return "¡Ganaste! " + playerSelection + " vence a " + computerSelection;
    } else {
        computerScore++;
        return "¡Perdiste! " + computerSelection + " vence a " + playerSelection;
    }
}

function updateScore() {
    playerScoreElem.textContent = playerScore;
    computerScoreElem.textContent = computerScore;
}

function handleClick(playerSelection) {
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    resultElem.textContent = result;
    updateScore();
}

document.getElementById('piedra').addEventListener('click', () => handleClick('piedra'));
document.getElementById('papel').addEventListener('click', () => handleClick('papel'));
document.getElementById('tijera').addEventListener('click', () => handleClick('tijera'));