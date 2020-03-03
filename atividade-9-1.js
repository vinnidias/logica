var user = require("readline-sync")
var raio = user.questionFloat('digite o valor do raio: ')
var pi = 3.14159
function volumeEsfera(raio){
    var volume = (4/3)*pi*(raio**3)
    return volume
}console.log(volumeEsfera(raio))