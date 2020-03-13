//Faça um algoritmo que diga qual é o carro mais potente da lista cars.json. 
//Utilize o campo Horsepower para descobrir qual é o mais potente


var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
var TodosCarros = []
var Hps = []

var HpCadaCarro = carros.map(carro => {
    var i=0
    if (carro.Horsepower != 0) {
        TodosCarros.push(carro)
    i++
    }
    
})
var NumsHps = carros.map(carro =>{
    var i= 0 
    if(carro.Horsepower != 0) {
        Hps.push(carro.Horsepower)
    i++
    }
}) 
//console.log(Hps) 
var max = Hps.reduce(function(a, b) {
    return Math.max(a, b);
  });

  //console.log(max)

var carroMaiorHp = carros.map(carro => {
    var i=0
    if (carro.Horsepower === max) {
        console.log(carro)
    console.log("esse é o carro mais potente")
    }})
    
