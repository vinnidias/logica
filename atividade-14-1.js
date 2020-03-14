//Solicite ao usuário para inserir yes ou no
//Após isso utilize a API https://yesno.wtf/api
//Esta api traz um dado aleatório yes ou no 
//No final imprima se o usuário acertou ou não

var user = require('readline-sync')
var axios = require('axios')
var yesOrNo = user.question('escolha entre yes ou no: ')

  axios.get('https://yesno.wtf/api')
 .then(resposta =>{
     var resposta = resposta.data.answer
if(yesOrNo === resposta){
    console.log(`acertou ${resposta}`)
} else{
    console.log('errou')
}
 })


