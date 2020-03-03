var user = require("readline-sync")
var anoNascimento = user.questionInt('quantos anos vc tem: ')
var mesNascimento = user.questionInt(' qntos meses vc tem:  ')
var diasNascimento = user.questionInt('quantos dias vc tem:  ')


function AnoEmDias(anoNascimento, mesNascimento, diasNascimento) {
    return (anoNascimento*365)+(mesNascimento*30)+diasNascimento

}console.log(AnoEmDias(anoNascimento, mesNascimento, diasNascimento)+ ' dias de vida')
