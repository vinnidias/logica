//Criar um módulo que calcule a média de uma coleção de números. 
//Para isso crie um arquivo chamado calcula-media.js. 
//No módulo exporte uma função media(arr) que recebe como argumento um array de números. 
//A função deve iterar por esses números e retornar sua média. 
//Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3 números, 
//utilize o módulo criado para calcular a média e no final imprima o resultado para o usuário.

var user = require('readline-sync')
var lista = []
var modulo = require('./calcula-media.js')

console.log(modulo)
for (i=0;i<3;i++) {
    var num = user.questionInt('digite o numero para a lista: ')
    lista.push(num)
    console.log('proximo numero ')
} 
console.log(lista)

console.log(`a media dos seus numeros é ${modulo.calculaMedia(lista)}`)