var user = require("readline-sync")
var palavra = user.question("digite uma palavra: ")
var tamanho = palavra.length
for(var i = 0; i < tamanho; i ++){
    console.log(palavra.charAt(i))
}