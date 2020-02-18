var user = require("readline-sync")
var num1 = user.questionInt("insira um numero: ")
var num2 = user.questionInt("insira outro numero: ")
var soma = 0
while(num1>0){
    soma=soma+num2
    num1--
    
}console.log("essa é a multipilcaçao dos seus numeros" +soma )
