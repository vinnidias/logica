var user = require("readline-sync")
var vogais = ['a','e','i','o','u',]
var numCons = 0
var numVogal = 0
var isVogal = false
var palavra = user.question("digite uma palavra: ")

for(i=0;i<palavra.length;i++){
    for(j=0;j<vogais.length;j++){
        if(palavra[i] == vogais[j])
        isVogal = true
        break
    }
    }
    if(isVogal){
        numVogal++
    }
  else{
      numCons++
  }  console.log(`${numCons} consoantes`)
     console.log(`${numVogal} vogais`)
