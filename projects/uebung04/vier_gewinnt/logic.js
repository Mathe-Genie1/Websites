function startGame() {
    const playerVisual = document.getElementById("player-vis");
    const resetButton = document.getElementById("reset-btn");
    const cells = document.querySelectorAll(".gamecell");
    const feedback = document.getElementById("feedback");

    let activePlayer = "orange";
    let gameEnded = false;

    playerVisual.classList.add(activePlayer);

    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            if (!gameEnded && cell.classList.contains("grey")) {
                cell.classList.remove("grey");
                cell.classList.add(activePlayer);
                if (checkWinner(activePlayer)) {
                    feedback.innerText = activePlayer.toUpperCase() + " wins!";
                    gameEnded = true;
                } else {
                    switchPlayer();
                }
            }
        });
    });

    resetButton.addEventListener("click", function() {
        cells.forEach(cell => {
            cell.classList.remove("orange", "blue");
            cell.classList.add("grey");
        });
        activePlayer = "orange";
        playerVisual.classList.remove("blue");
        playerVisual.classList.add(activePlayer);
        feedback.innerText = "";
        gameEnded = false;
    });

    function switchPlayer() {
        activePlayer = activePlayer === "orange" ? "blue" : "orange";
        playerVisual.classList.remove("orange", "blue");
        playerVisual.classList.add(activePlayer);
    }

    function checkWinner(player) {
        const directions = [
            [-1, 0], 
            [0, 1],  
            [-1, 1], 
            [-1, -1]  
        ];

        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                if (getCell(row, col) === player) {
                    for (let [dx, dy] of directions) {
                        let count = 1;
                        for (let i = 1; i < 4; i++) {
                            let newRow = row + dx * i;
                            let newCol = col + dy * i;
                            if (newRow >= 0 && newRow < 6 && newCol >= 0 && newCol < 7 && getCell(newRow, newCol) === player) {
                                count++;
                            } else {
                                break;
                            }
                        }
                        if (count === 4) {
                            return true;
                        }
                    }
                }
            }
        }
        return false;
    }

    function getCell(row, col) {
        return cells[row * 7 + col].classList.contains("orange") ? "orange" :
               cells[row * 7 + col].classList.contains("blue") ? "blue" :
               "grey";
    }
};

document.addEventListener("DOMContentLoaded", startGame);