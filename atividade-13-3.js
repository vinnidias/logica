//Crie um algoritmo que conte quantos carros da Ford existem no cars.json.


var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
var i = 0
var x = carros.Car.split()

var CarroMarca = carros.incldes(carro => {
    if(carro.Car == 'Ford'){
        i++;
    }
})
console.log(`${i} são da marca Ford!`)