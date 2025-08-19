const pedra = document.getElementById("rock");
const papel = document.getElementById("paper");
const tesoura = document.getElementById("scissors");
const result = document.querySelector(".result")
const yourScore = document.querySelector(".your-score")
const machineScore = document.getElementById("machine")
let humanScore = 0;
let machineScoreValue = 0;

function clickOnButton(humanchoice) {
    const machine = machineChoice()
    if ((humanchoice === "rock" && machine === "scissors") 
        || (humanchoice === "paper" && machine === "rock") 
    || (humanchoice === "scissors" && machine === "paper")) {
        result.innerHTML = "Você ganhou!"
        console.log(yourScore)
        yourScore.innerHTML = ++humanScore
    } else if ((humanchoice === machine)){
        result.innerHTML = "Empate!"
    } else {
        result.innerHTML = "Você perdeu!"
        machineScoreValue++;
        machineScore.innerHTML = machineScoreValue
    }
}

const machineChoice = (machine) => {
    const choices = ["rock", "paper", "scissors"]; 
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
    
}

const playTheGame = (human, machine) => {
    console.log("jogador: " + human + " máquina: " + machine)
}