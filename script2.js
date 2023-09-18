const prompt = require('prompt-sync')()

let number = Math.round(Math.random() * 101)
let tries = 0

console.log("Welcome to 'Guess the number' ")
const negativeName = prompt("How wouldn't you like to be called? ")
const positiveName = prompt('How would you like to be called? ')

while (true) {
  let question = Number(prompt('Enter a number between 0 - 100 '))
  if (question === number) {
    console.log('You guessed it in', tries, 'tries!', positiveName)
    break
  } else if (question < number) {
    console.log('Your guess is to low', negativeName)
    tries++
  } else if (question > number) {
    console.log('Your guess is to high', negativeName)
    tries++
  } else {
    console.log('Enter a valid number', negativeName)
  }
}
