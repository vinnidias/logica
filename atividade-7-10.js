var user = require("readline-sync")
var palavra = user.question("digite uma palavra: ")

if(palavra.endsWith('al')){
    console.log(palavra);
}else{
    console.log('palavra nao identificada')

}