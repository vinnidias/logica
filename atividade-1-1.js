var user = require("readline-sync")
var ano = user.question("ano do seu nascimento: ")
var idade = 2020-ano
if(idade<16){console.log("você ainda não pode votar")
}else if(idade>=65){console.log("você ainda pode votar se quiser")
}else if(idade>=18){console.log("você deve votar")
}else{console.log("você já pode votar")
}