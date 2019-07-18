// player logic
let playerOneTurn = true;
let gameOver = false;
let turnCount = 0;
let boardArray = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0];

// click logic functions
let cells = document.querySelectorAll('.cell');

let result = document.querySelector('#result');

cells.forEach(function(cell) {
    cell.addEventListener("click", cellClicked);
});

function cellClicked(e) {
    if (gameOver) wipeBoard();

    if (e.target.textContent == "") {
        if (playerOneTurn) {
            e.target.textContent = "X";
            boardArray[e.target.id] = 1;
            playerOneTurn = false;
        } else {
            e.target.textContent = "O";
            boardArray[e.target.id] = 2;
            playerOneTurn = true;
        } 
        checkWinner();
        turnCount++;
        console.log("turncount: " + turnCount);
    }

    // game over logic
    if (turnCount == 9) {
        result.textContent = "Game Draw";
        gameOver = true;
    }

    console.log(boardArray);
}

function wipeBoard() {
    for (let cell of cells) {
        cell.textContent = "";
    }
    boardArray = [0, 0, 0,
                  0, 0, 0,
                  0, 0, 0];
    
    playerOneTurn = true;
    turnCount = 0;
    result.textContent = "Let's Play";
    gameOver = false;
}

function checkWinner() {
    if (boardArray[0] == boardArray[1] &&
        boardArray[0] == boardArray[2] &&
        boardArray[1] == boardArray[2] && boardArray[0] != 0) 
    {
        result.textContent = "Player " + boardArray[0] + " wins!";
        gameOver = true;
    }

    if (boardArray[3] == boardArray[4] &&
        boardArray[3] == boardArray[5] &&
        boardArray[4] == boardArray[5] && boardArray[3] != 0) 
    {
        result.textContent = "Player " + boardArray[3] + " wins!";
        gameOver = true;
    }

    if (boardArray[6] == boardArray[7] &&
        boardArray[6] == boardArray[8] &&
        boardArray[7] == boardArray[8] && boardArray[6] != 0) 
    {
        result.textContent = "Player " + boardArray[6] + " wins!";
        gameOver = true;
    }

    if (boardArray[0] == boardArray[3] &&
        boardArray[3] == boardArray[6] &&
        boardArray[0] == boardArray[6] && boardArray[0] != 0) 
    {
        result.textContent = "Player " + boardArray[0] + " wins!";
        gameOver = true;
    }

    if (boardArray[1] == boardArray[4] &&
        boardArray[4] == boardArray[7] &&
        boardArray[1] == boardArray[7] && boardArray[1] != 0) 
    {
        result.textContent = "Player " + boardArray[1] + " wins!";
        gameOver = true;
    }

    if (boardArray[2] == boardArray[5] &&
        boardArray[5] == boardArray[8] &&
        boardArray[2] == boardArray[8] && boardArray[2] != 0) 
    {
        result.textContent = "Player " + boardArray[2] + " wins!";
        gameOver = true;
    }

    if (boardArray[0] == boardArray[4] &&
        boardArray[4] == boardArray[8] &&
        boardArray[0] == boardArray[8] && boardArray[0] != 0) 
    {
        result.textContent = "Player " + boardArray[0] + " wins!";
        gameOver = true;
    }

    if (boardArray[2] == boardArray[4] &&
        boardArray[4] == boardArray[6] &&
        boardArray[6] == boardArray[2] && boardArray[2] != 0) 
    {
        result.textContent = "Player " + boardArray[2] + " wins!";
        gameOver = true;
    }
}


