let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
    const choices = ['Stone', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';

    if (playerChoice === computerChoice) {
        result = ' 🤝 It\'s a tie!';
    } else if (
        (playerChoice === 'Stone' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Stone') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = '🥳 You win!';
        playerScore++;
    } else {
        result = '🥳 Computer wins!';
        computerScore++;
    }

    document.getElementById('result').textContent = `Player chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}
