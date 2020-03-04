//Faça um programa que pergunte ao usuário se ele quer adicionar ou apenas exibir, 
//caso o usuário escolha adicionar, altere o programa inicial de cadastro de carro 
//para que não salve 1 objeto carro e sim uma coleção de carros (utilizando arrays, 
//em vez de serializar/deserializar o objeto será o array que possui os carros). 
//Após cadastrar o carro o programa deve novamente solicitar o usuário se quer exibir ou adicionar,
//caso o usuário escolha exibir deve ser exibido todos os carros cadastrados. 	


var fs = require('fs');
var user = require("readline-sync")
var listaCarros = []
var caminhoDoArquivo = 'carros.json'
var listaSerealizada = JSON.stringify(listaCarros)
var perguntas = user.questionInt('quer adionar(1) ou exibir(2)?')

function adicionarCarro(carro){
   for(perguntas=1){ 
    var carro = new Object();
carro.cor = user.question("qual a cor do carro: ")
carro.modelo = user.question("qual o modelo do carro: ")
carro.marca = user.question("qual a marca do carro: ")
listaCarros.push(carro)
var caminhoDoArquivo = 'carros.json'
var listaSerealizada = JSON.stringify(listaCarros)
fs.writeFileSync(caminhoDoArquivo, listaSerealizada)
console.log("carro adicionado")
var perguntas = user.questionInt('quer adionar(1) ou exibir(2)?')
}
else {var listaCarros = JSON.parse(listaSerealizada)
 console.log (listaCarros)
 return 'essa é a sua coleçao'
}} 
 adicionarCarro(carro) 
console.log(listaCarros)
