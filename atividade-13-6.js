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
var min = Hps.reduce(function(a, b) {
    return Math.min(a, b);
  });

  console.log(min)
  var fs = require('fs')
  var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
  var carros = JSON.parse(json)
  var TodosCarros = []
  var Hps = []
  
  var listaTodosOsCarros = carros.map(carro => {
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
      if (carro.Horsepower === 46) {
          console.log(carro)
      console.log("esse é o carro menos potente")
      }})
      
  

