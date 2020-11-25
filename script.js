const rollButton = document.getElementById("button")
const diceImg = document.getElementById("dice-img")
const mainHead = document.getElementById("roll-heading")
const playerHead = document.getElementById("player-heading")
const scoreHead = document.getElementById("score-heading")
const againButton = document.getElementById("again-button")
const backButton = document.getElementById("button2")

let score = 0





const rollDice = () => {
    mainHead.textContent = "No more Bets!"
    diceImg.src = 'dice.gif'
    let randomNum = Math.floor(((Math.random() * 6) + 1))
    diceImg.src = `assets/dice-${randomNum}.png`

    if (randomNum === 1) {
        mainHead.textContent = "You lose!"
        scoreHead.textContent = score
        rollButton.style.display = "none"
        backButton.style.display = "inline"
        mainHead.style.animationName = "flash-black"
        mainHead.style.animationPlayState = "running"
    }
    else if (score <= 20) {
        score += randomNum
        scoreHead.textContent = score
    }
    if (score > 20) {
        mainHead.textContent = "You've won!"
        scoreHead.textContent = score
        rollButton.style.display = "none"
        backButton.style.display = "inline"
        backButton.style.background = "black"
        mainHead.style.animationPlayState = "running"
    }


}



rollButton.addEventListener('click', () => {
    rollDice()
});
backButton.addEventListener('click', () => {
    location.reload()
});
