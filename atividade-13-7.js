//Faça um algoritmo que solicite ao usuário A ou B 
//Caso o usuário escolha A 
//	O algoritmo deve imprimir toda informação do carro com maior aceleração
//Caso o usuário escolha B
//	O algoritmo deve imprimir toda informação do carro com maior potência

//Se houver mais de um carro imprimir todos 1 por 1. 

var user = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
var TodosCarros = []
var Hps = []
var Accs = []

var HpsAcc = user.question("quer ver o carro com maior Hp? digite: A. Mas se quer ver o carro com maior Acc digite: B ")
 
if (HpsAcc == 'a' || HpsAcc =='A') {var TodosCarros = []
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
        console.log("esse é o carro maior Hp")
        }})

 }
 if (HpsAcc == 'b' || HpsAcc == 'B') {
    var AccCadaCarro = carros.map(carro => {
        var i=0
        if (carro.Acceleration != 0) {
            TodosCarros.push(carro)
        i++
        }
        
    })
    var NumsAccs = carros.map(carro =>{
        var i= 0 
        if(carro.Acceleration != 0) {
            Accs.push(carro.Acceleration)
        i++
        }
    }) 
    //console.log(Hps) 
    var max = Accs.reduce(function(a, b) {
        return Math.max(a, b);
      });
    
      //console.log(max)
    
    
      
     var carroMaiorHp = carros.map(carro => {
        var i=0
        if (carro.Acceleration === max) {
            console.log(carro)
        console.log("esse é o carro com maior Acc")
        }})
 
   
    
    }
    
 