var user = require("readline-sync")
var maças = user.question("quantas maçãs você comprou?")
var maçaatacado = maças*0.25
var maçavarejo = maças*0.3
if(maças<12){
    console.log("o preço é de varejo é ")
}else(maça>12){
    console.log("o preço de atacado é")
}


