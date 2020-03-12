//Crie um algoritmo que conte quantos carros do Japan (Japão) existem na base cars.json

//O campo que define o país no cars.json é Origin
//A comparação da string pode ser utilizada usando a palavra “Japan”



var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
var i = 0
var CarroOrigen = carros.filter(carro => {
    if(carro.Origin == 'Japan'){
        i++;
    }
})
console.log(`${i} são japoneses`)