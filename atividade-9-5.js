var user = require("readline-sync")
var num1 = user.questionFloat('digite um numero: ')
var num2 = user.questionFloat('digite outro numero: ')

function MenorNumero(num1, num2) {
    var resultado 
    if(num1<num2){
        resultado = num1
       
    }else{
        
        resultado = num2

    }return resultado
} console.log(MenorNumero(num1, num2)+ ' é menor')