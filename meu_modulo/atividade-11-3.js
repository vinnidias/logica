//Faça um algoritmo que receba um número e diga se ele é par ou primo
//Utilize o pacote :  https://www.npmjs.com/package/canivetesuiconode


var user = require('readline-sync')
var calc = require('canivetesuiconode')
var num = user.questionInt("digite um numero: ")
if (calc.NumeroPar(num)==true){
    console.log("seu numero eh par")}
 else if (calc.NumeroPrimo(num)==true){
     console.log("esse numero é primo")
 }   
 else { console.log('esse numero é impar e nao primo')}
