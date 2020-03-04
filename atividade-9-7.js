//Faça uma função que recebe um número e devolve seu valor absoluto. 
//No final peça um número para o usuário e exiba o valor absoluto.

var user = require("readline-sync")
var num = user.questionInt("digite um numero: ")

function valorAbsoluto(num){
    return Math.abs(num)

}console.log(valorAbsoluto(num)+ ' esse é o valor absoluto')
