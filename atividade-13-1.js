//Crie um algoritmo que solicite um número para o usuário e 
//diga quantos carros mais potente que o valor informado.
//Para isso utiliza a propriedade “Horserpower” do cars.json
//DICA: função filter ou procure como contar quantos objetos tem x valor em uma lista no google.


var user = require('readline-sync')
var fs = require('fs')
var json = fs.readFileSync("C:\\projetos neura\\logica\\cars.json")
var carros = JSON.parse(json)
var poteciaDoUsuario = user.question('digite um valor de potencia minima: ')


var carrosFiltrados = carros.filter((carro) => {
    if(carro.Horsepower >= poteciaDoUsuario){
        return true;
    }
    else{
        return false
    }
})
console.log(carrosFiltrados);