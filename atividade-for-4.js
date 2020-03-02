
var user = require("readline-sync")
for(var i=0;i<5;i++){

var aluno = user.question("nome do aluno: ")
var notaA = user.questionFloat("qual a nota A: ")
var notaB = user.questionFloat("qual a nota B: ")
var media_ponderada = 0.3*notaA + 0.7*notaB 

console.log(`o aluno ${aluno} tem media: ${media_ponderada}`)
}