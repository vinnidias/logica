var user = require("readline-sync")
var macas = user.questionInt("quantas macas vc comprou: ")
var macasvarejo = 0.3
var macaatacado = 0.25
if(macas<=12){
    console.log(macas*macasvarejo)
}else if(macas>12){
        console.log(macas*macaatacado)
    }
