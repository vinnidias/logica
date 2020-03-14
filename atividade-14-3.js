//Faça um algoritmo que receba um número de um episódio de Breaking Bad.
//Após isso o algoritmo deve imprimir o elenco de personagens e também de qual temporada é este episódio.
//Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
//Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
//Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10

var user = require('readline-sync')
var axios = require('axios')
var episodio = user.question('digite o numero de um ep de braking bed: ')
var i = 0 

axios.get(`https://www.breakingbadapi.com/api/episodes/${episodio}`)
.then(ep =>{ 
    console.log(ep.data)
    
    }
)

