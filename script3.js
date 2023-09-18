const prompt = require('prompt-sync')()

console.log("Welcome to 'Rock paper scissors' ")

const paper = 'paper'
const scissors = 'scissors'
const rock = 'rock'

wins = 0
lost = 0
ties = 0

let options = [paper, scissors, rock]
let random = Math.round(Math.random() * 2)
let machineChoice = options[random]

for (let i = 4; i > 0; i--) {
  playerChoice = prompt("Select 'rock', 'paper' or 'scissors' ")
  if (
    playerChoice !== paper &&
    playerChoice !== rock &&
    playerChoice !== scissors
  ) {
    console.log('Enter a correct value')
    i++
  } else if (playerChoice === machineChoice) {
    console.log('The machine chose', machineChoice)
    console.log("It's a tie")
    ties++
  } else if (
    (playerChoice === paper && machineChoice === rock) ||
    (playerChoice === rock && machineChoice === scissors) ||
    (playerChoice === scissors && machineChoice === paper)
  ) {
    console.log('The machine chose', machineChoice)
    console.log('You win!')
    wins++
  } else if (
    (playerChoice === paper && machineChoice === scissors) ||
    (playerChoice === rock && machineChoice === paper) ||
    (playerChoice === scissors && machineChoice === rock)
  ) {
    console.log('The machine chose', machineChoice)
    console.log('You lose!')
    lost++
  }
  console.log(`remain attemps: ${i - 1}`)
}

console.log('Ties: ', ties)
console.log('Lost games: ', lost)
console.log('Wins: ', wins)

if (wins > lost) {
  console.log('You win the game!')
} else if (lost > wins) {
  console.log('You lost the game')
}
