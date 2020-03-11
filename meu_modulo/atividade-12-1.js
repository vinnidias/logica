//Criar um algoritmo que receba 2 carros e verifique se os carros são iguais
//Para isso : 
//Crie uma classe Carro que receba as variáveis nome, modelo e cor no construtor e inicialize 
//as propriedades com estes valores. 
//Após isso informe ao usuário para cadastrar o primeiro carro e peça, o nome, modelo e cor. 
//Após informar o primeiro carro peça o segundo carro também solicitando nome, modelo e cor. 
//Ao final o algoritmo deve comparar se os carro são iguais.
//Um carro vai ser igual ao outros se modelo e nome possuem o mesmo valor.

var user = require('readline-sync')
var carros = []

class Carro {
    constructor(nome, modelo, cor){
        this.nome = nome
        this.modelo = modelo
        this.cor = cor
    } 
}
for(i=0; i<2; i++){
    var nome = user.question('qual a marca do seu carro? ')
    var modelo = user.question('qual o modelo do seu carro? ')
    var cor = user.question('qual a cor do seu carro? ')
    var novosCarros = new Carro(nome, modelo, cor);
    carros.push(novosCarros)
    console.log('adinonar o segundo carro.')
}
if (carros[0].modelo == carros[1].modelo && carros[0].nome == carros[1].nome){
    console.log('seus dois carros sao da mesma marca e modelo')

}else {
    console.log('seus carros sao diferentes em marca e/ou modelo')
}

