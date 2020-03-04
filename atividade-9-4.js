//Faça um procedimento que recebe, por parâmetro, 
//um valor N e calcula e escreve a tabuada de 1 até N. Mostre a tabuada na forma:
//1 x N = N
//2 x N = 2N
//...
//N x N = N2
//Após isso solicite o usuário um número e forneça o argumento do usuário para a função.


var user = require("readline-sync")
var numN = user.questionInt("digite um numero inteiro: ")


function Tabuada(numN){
   for(i=1;i<=numN;i++){
    var resultado = i*numN
    console.log(resultado)
   } return 'fim'
}console.log(Tabuada(numN))