var calculaMedia = function (lista){    
    var soma = 0 
         for(i=0; i<lista.length; i++){
        var soma = soma + lista[i]
     }
     var media = soma / lista.length
     console.log(media)
        return media
     }
module.exports = {calculaMedia}