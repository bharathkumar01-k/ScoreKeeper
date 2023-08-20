let playerOneElement = document.querySelector("#player1Score");
let playerTwoElement = document.querySelector("#player2Score");
const dropdown = document.querySelector("#dropdown");
const playerOneButton = document.querySelector("#player1");
const playerTwoButton = document.querySelector("#player2");
playerOneScore = +playerOneElement.innerText;
playerTwoScore = +playerTwoElement.innerText;
console.log(playerOneScore, playerTwoScore);
let maxLimit = +dropdown.value;
dropdown.addEventListener("change", () => {
    maxLimit = +dropdown.value;
    console.log(maxLimit);
    reset();
});
// console.log(maxLimit);
const reset = () => {
    playerOneElement.innerText = 0;
    playerTwoElement.innerText = 0;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneElement.classList.remove("text-emerald-400");
    playerOneElement.classList.remove("text-red-500");
    playerTwoElement.classList.remove("text-emerald-400");
    playerTwoElement.classList.remove("text-red-500");
    playerOneElement.classList.add("text-black");
    playerTwoElement.classList.add("text-black");
};
const updatePlayerScore = (playerOneScore, playerTwoScore) => {
    if (playerOneScore < maxLimit && playerTwoScore < maxLimit) {
        playerOneElement.innerText = playerOneScore;
        playerTwoElement.innerText = playerTwoScore;
    } else if (playerOneScore === maxLimit || playerTwoScore === maxLimit) {
        playerOneElement.innerText = playerOneScore;
        playerTwoElement.innerText = playerTwoScore;
        playerOneElement.classList.remove("text-black");
        playerTwoElement.classList.remove("text-black");
        if (playerOneScore === maxLimit) {
            playerOneElement.classList.add("text-emerald-400");
            playerTwoElement.classList.add("text-red-500");
        } else if (playerTwoScore === maxLimit) {
            playerTwoElement.classList.add("text-emerald-400");
            playerOneElement.classList.add("text-red-500");
        }
    }
};
playerOneButton.addEventListener("click", () => {
    if (playerOneScore < maxLimit && playerTwoScore < maxLimit) {
        playerOneScore += 1;
    }
    console.log("player 1 button clicked", playerOneScore, playerTwoScore);
    updatePlayerScore(playerOneScore, playerTwoScore);
});
playerTwoButton.addEventListener("click", () => {
    if (playerOneScore < maxLimit && playerTwoScore < maxLimit) {
        playerTwoScore += 1;
    }
    console.log("player 2 button clicked", playerOneScore, playerTwoScore);
    updatePlayerScore(playerOneScore, playerTwoScore);
});

const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", () => {
    reset();
});
console.log(playerOneScore, playerTwoScore);
