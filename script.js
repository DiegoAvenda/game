const prompt = require('prompt-sync')()

let name = prompt('Enter your name ')

console.log('Welcome', name, 'to the DNA quiz')

let correctAnswers = 0
const questions = 2

const question1 = prompt('What does the acronym "DOM" stand for in JavaScript ')
answer1 = 'DOCUMENT OBJECT MODEL'

if (question1.toUpperCase() === answer1) {
  console.log('Correct!')
  correctAnswers++
} else {
  console.log('Incorrect')
}

const question2 = prompt('cuanto es uno mas uno? ')

if (question1.toUpperCase() === 'DOS' || 2) {
  console.log('Correct!')
  correctAnswers++
} else {
  console.log('Incorrect')
}

console.log('You got', correctAnswers, 'correct answers')
console.log(name, 'Your score is', (correctAnswers / questions) * 100)
