var user = require("readline-sync")
var num = user.questionInt("insira um numero: ")
var num2 = 0
while(num2<=num-2){
    num2=num2+2
    console.log(num2)
}