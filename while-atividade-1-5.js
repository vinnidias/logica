var user = require("readline-sync")
var numbase = user.questionInt("insira um numero base: ")
var numpotencia = user.questionInt("insira um numero para potencia: ")
var num = 0
while(numpotencia>=2){
    numbase=numbase*numbase
    numpotencia--
    console.log(numbase)
}