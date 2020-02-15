var user = require("readline-sync")
var numero = user.question("insira um numero")
if(numero%2===0){
    console.log("esse número é par")
} else{
    console.log("esse número é ímpar")
}

