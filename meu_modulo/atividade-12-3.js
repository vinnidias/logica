//Criar um módulo que calcule a média de uma coleção de números. 
//Para isso crie um arquivo chamado calcula-media.js. 
//No módulo exporte uma função media(arr) que recebe como argumento um array de números. 
//A função deve iterar por esses números e retornar sua média. 
//Após isso no arquivo da atividade importe o módulo criado e solicite ao usuário 3 números, 
//utilize o módulo criado para calcular a média e no final imprima o resultado para o usuário.

var media = require('median')
var lista = []
var valorDaMedia = media(lista)
var user = require('readline-sync')

for(i=0;i<3;i++) {
    var addLista = user.questionInt('digite um numero: ')
 lista.push(addLista)
 console.log(lista)
}console.log(`a media dos numeros adicionados é ${valorDaMedia}`)

