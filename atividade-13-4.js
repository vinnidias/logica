//Faça um algoritmo que calcule a média de potência dos carros da Europe (Europa)
//Similar a atividade 2 porém usaremos o campo Origin para selecionar os carros 
//da europa e depois disso aplicar a média em cima do campo Horsepower.


var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
var HpsEuropa = [] 
var modelsEuropa = []

var i = 0
var CarrosEuropeus = carros.filter(carro => {
    
    if (carro.Origin === 'Europe'){ 
        
       modelsEuropa.push(carro)
      i++  
    }})
//console.log(modelsEuropa)

var HP = modelsEuropa.map(carro => {
    HpsEuropa.push(carro.Horsepower) 
i++
})
//console.log(HpsEuropa)

var media = require('./calcula-media2.js')

console.log(`a media dos Hps dos modelos europeus sao ${media.calculaMedia(HpsEuropa)}`)
