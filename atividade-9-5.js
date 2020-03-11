//Escreva uma função que recebe dois parâmetros numéricos e retorne o menor número.
//Solicite dois números para o usuário e forneça como argumento para esta função.
//Escreva o resultado da função na tela dizendo qual menor número.


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