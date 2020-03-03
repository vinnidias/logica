var user = require("readline-sync")
var base = user.questionInt('digite o numero da base: ')
var potencia = user.questionInt('digite o numero da potencia: ')

function CalculoPotencia(base, potencia){
    var resultado = base**potencia
    return resultado
} console.log(CalculoPotencia(base, potencia))