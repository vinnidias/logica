var user = require("readline-sync")
var num = user.questionInt("digite um numero: ")

function valorAbsoluto(num){
    return Math.abs(num)

}console.log(valorAbsoluto(num)+ ' esse é o valor absoluto')
