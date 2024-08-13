const input = document.querySelector("input"),
    guess = document.querySelector(".guess"),
    checkButton = document.querySelector("button"),
    remainChances = document.querySelector(".chances");

input.focus();

let randomNum = Math.floor(Math.random() * 100) + 1;
let chance = 10;

checkButton.addEventListener("click", () => {
    let inputValue = parseInt(input.value);
    if (chance > 1) {
        chance--;
        if (inputValue === randomNum) {
            guess.textContent = "Congratulations! You guessed it right!";
            guess.style.color = "green";
            input.disabled = true;
            checkButton.textContent = "Replay";
        } else if (inputValue > randomNum && inputValue <= 100) {
            guess.textContent = "Your guess is too high!";
            guess.style.color = "red";
            remainChances.textContent = chance;
        } else if (inputValue < randomNum && inputValue >= 1) {
            guess.textContent = "Your guess is too low!";
            guess.style.color = "red";
            remainChances.textContent = chance;
        } else {
            guess.textContent = "Please enter a valid number between 1 and 100!";
            guess.style.color = "orange";
        }
    } else {
        guess.textContent = "Game Over! You've used all your chances.";
        guess.style.color = "red";
        input.disabled = true;
        checkButton.textContent = "Replay";
    }

    if (checkButton.textContent === "Replay") {
        checkButton.addEventListener("click", () => {
            location.reload(); 
        });
    }
});
