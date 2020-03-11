const FasamImc = require('fasam-imc-calc');
const user = require('readline-sync')

var peso = user.questionFloat('qual o seu peso? ')
var altura = user.questionFloat('qual a sua altura? ')

const imc = new FasamImc(peso, altura)

console.log(`IMC ${imc.calc()}`)


