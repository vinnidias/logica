//Faça uma função que recebe por parâmetro o raio 
//de uma esfera e calcula o seu volume (v = 4/3.pi.R3).
//Então solicite ao usuário o raio e a esfera e 
//utilize a função para exibir o resultado.

var user = require("readline-sync")
var raio = user.questionFloat('digite o valor do raio: ')
var pi = 3.14159
function volumeEsfera(raio){
    var volume = (4/3)*pi*(raio**3)
    return volume
}console.log(volumeEsfera(raio))