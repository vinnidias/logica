//Escreva uma função que receba dois números o primeiro será a base 
//e o segundo a potência e no final a função retorna a base elevada pela potência.
//Faça um programa que peça ao usuário a base e a potência e forneça para a função, 
//no final imprima o resultado. 
//OBS: O algoritmo só precisa saber lidar com números inteiros.

var user = require("readline-sync")
var base = user.questionInt('digite o numero da base: ')
var potencia = user.questionInt('digite o numero da potencia: ')

function CalculoPotencia(base, potencia){
    var resultado = base**potencia
    return resultado
} console.log(CalculoPotencia(base, potencia))