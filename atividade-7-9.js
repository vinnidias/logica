var user = require("readline-sync")
var nome = user.question("digite o seu nome: ")
console.log('essa é a terceira letra do seu nome: '+nome.charAt(2))