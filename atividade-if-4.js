var user = require("readline-sync")
var macas = user.questionInt("quantas macas vc comprou: ")
var macasvarejo = 0.3
var macaatacado = 0.25
var minatacado = 12
if(macas<=minatacado){
    console.log(macas*macasvarejo)
}else {
        console.log(macas*macaatacado)
    }
