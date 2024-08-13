const options = ["rock", "paper", "scissors"];
const resultDiv = document.querySelector(".result");
const userResultImg = document.querySelector(".user_result img");
const cpuResultImg = document.querySelector(".cpu_result img");
const optionImages = document.querySelectorAll(".option_image img");

optionImages.forEach((img, index) => {
    img.addEventListener("click", () => {
        let userChoice = options[index];
        let cpuChoice = options[Math.floor(Math.random() * options.length)];
        
        userResultImg.src = `images/${userChoice}.png`;
        cpuResultImg.src = `images/${cpuChoice}.png`;

        if (userChoice === cpuChoice) {
            resultDiv.textContent = "It's a Draw!";
            resultDiv.style.color = "#ffa500";
        } else if (
            (userChoice === "rock" && cpuChoice === "scissors") ||
            (userChoice === "paper" && cpuChoice === "rock") ||
            (userChoice === "scissors" && cpuChoice === "paper")
        ) {
            resultDiv.textContent = "You Win!";
            resultDiv.style.color = "#4CAF50";
        } else {
            resultDiv.textContent = "You Lose!";
            resultDiv.style.color = "#f44336";
        }
    });
});
