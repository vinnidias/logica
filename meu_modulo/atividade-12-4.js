//Criar uma função que receba uma coleção de alunos e calcule a média de idade
//Adicione uma nova função no arquivo calcula-media.js chamada calculaMediaIdadeAluno(alunos).
//A função deve receber um array da mesma classe dos alunos criada na atividade 2. 
//Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela. 
//Adicione essa função para ser exportado pelo módulo.
//Adicione no final do programa da atividade 2 após informar o nome dos alunos com maior idade 
//também imprimir a média de idade dos alunos utilizando o método calculaMediaIdadeAluno(alunos) 


var user = require('readline-sync')
var ListasDeAlunos = []
var sala = 3
var listaIdade = []
var media = require('./calcula-media')
class Aluno {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

for (i=0; i<sala; i++){
    var nome = user.question('digite o nome do aluno: ')
    var idade = user.questionInt('digite a idade do aluno: ')
    var AlunosADD = new Aluno(nome, idade)
    ListasDeAlunos.push(AlunosADD)
    console.log('adicione o proximo aluno')
}

var cadaIdade = ListasDeAlunos.map(aluno =>{
    if (aluno.idade != 0){
        listaIdade.push(aluno.idade)
    }
})
//console.log(listaIdade)

console.log(media.calculaMedia(listaIdade)+ 'essa é a media de idade de alunos')
