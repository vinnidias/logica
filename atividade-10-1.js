//Crie um programa que receba 3 entrada do usuário. A cor, o modelo e a marca, 
//crie um objeto Carro e atribua as entradas do usuário neste objeto.
//No final o programa deve imprimir as informações do carro.
//Utilize a criação de objetos para resolver este problema

const fs = require('fs');
var user = require("readline-sync")
var carro = new Object();
carro.cor = user.question("qual a cor do carro: ")
carro.modelo = user.question("qual o modelo do carro: ")
carro.marca = user.question("qual a marca do carro: ")
console.log(`seu carro é um ${carro.marca} ${carro.modelo} ${carro.cor}`)

var carroSerealizado = JSON.stringify(carro)
var caminhoDoArquivo = 'carro.json'
console.log(carroSerealizado)

fs.writeFileSync(caminhoDoArquivo, carroSerealizado)