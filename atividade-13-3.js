//Crie um algoritmo que conte quantos carros da Ford existem no cars.json.


var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
x=0
carros.map(carro => {
    var i = carro.Car.split(" ")

    if(i[0]=="Ford"){
    x++
    }

}) 
console.log(`${x} são ford`)
