//Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, 
//se mais de um possuir maior idade apresentar o nome de todos os que possuem maior idade.
//Para isso crie uma classe Aluno que receba duas variáveis no construtor nome e idade 
//e inicialize essas variáveis nas propriedades do objeto.
//Após isso peça para o usuário cadastrar o primeiro aluno e solicite nome e idade. 
//Crie o objeto do aluno e adicione em um array.
//Repita esse passo para os outros alunos. 
//Ao final o algoritmo deve iterar pelo array de alunos  e descobrir quais são os alunos 
//com maior idade e imprimir seus nomes.


var user = require('readline-sync')
var ListasDeAlunos = []
class Aluno {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

for (i=0; i<3; i++){
    var nome = user.question('digite o nome do aluno: ')
    var idade = user.questionInt('digite a idade do aluno: ')
    var AlunosADD = new Aluno(nome, idade)
    ListasDeAlunos.push(AlunosADD)
    console.log('adicione o proximo aluno')
} 
var MaiorIdade = Math.max(ListasDeAlunos[0].idade, ListasDeAlunos[1].idade, ListasDeAlunos[2].idade)
if(MaiorIdade == ListasDeAlunos[0].idade){
    console.log(`o aluno ${ListasDeAlunos[0].nome} é o mais velho`)
}if(MaiorIdade == ListasDeAlunos[1].idade){
    console.log(`o aluno ${ListasDeAlunos[1].nome} é o mais velho`)
}if (MaiorIdade == ListasDeAlunos[2].idade){
    console.log(`o aluno ${ListasDeAlunos[2].nome} é o mais velho`)
}