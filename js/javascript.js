
document.querySelectorAll('.win-mark').forEach(function(element) {
    element.style.visibility = 'hidden'
})

function rollTheDice() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var dice1ImagePath = "images/dice" + dice1 + ".png";
    var dice2ImagePath = "images/dice" + dice2 + ".png";

    document.querySelector('#player1-dice-img').src = dice1ImagePath;
    document.querySelector('#player2-dice-img').src = dice2ImagePath;

    showWinner(dice1, dice2);
}

function showWinner(dice1, dice2) {
    const player1WinMark = document.querySelector('#player1-win-mark');
    const player2WinMark = document.querySelector('#player2-win-mark');
    const winner = document.querySelector('#winner');

    if (dice1 > dice2) {
        player2WinMark.style.visibility = 'hidden';
        player1WinMark.style.visibility = 'visible';
        winner.innerText = "Player 1 Wins !";
    } else if ( dice2 > dice1) {
        player1WinMark.style.visibility = 'hidden';
        player2WinMark.style.visibility = 'visible';
        winner.innerText = "Player 2 Wins !";
    } else {
        player1WinMark.style.visibility = 'hidden';
        player2WinMark.style.visibility = 'hidden';
        winner.innerText = "DRAW";
    }
}