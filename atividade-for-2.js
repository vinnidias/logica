var user = require("readline-sync")
var num1 = user.questionInt("digite um numero: ")
var num2 = user.questionInt("digite outro numero: ")
for(num1 ; num1<num2; num1++){
    console.log(num1)
}
