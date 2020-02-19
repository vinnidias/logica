var user = require("readline-sync")
var numbase = user.questionInt("insira um numero base: ")
var numpotencia = user.questionInt("insira um numero para potencia: ")
var produto = 1
while(numpotencia>=1){
    produto=produto*numbase
    numpotencia--
    
}console.log(produto)