//Utilize o módulo https://www.npmjs.com/package/notas-universitarias-util
//Para fazer um programa que calcule a média universitaria. 
//Peça entradas para o usuário de notas e no final calcule a média usando o 
//módulo acima. Caso ele seja aprovado imprimir aprovado se não reprovado

var medias = require ('notas-universitarias-util')
var user = require ('readline-sync')

var notas = {
    g1: user.questionFloat('qual a primeira nota? '),
    g2: user.questionFloat('qual a segunda nota? '),
    g3: user.questionFloat('qual a terceira nota? ' ),

} 
console.log(medias.default(4).media(notas))
