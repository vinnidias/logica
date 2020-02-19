var user = require("readline-sync")
var menu = user.question("escolha entre A ou B: ")
num = 0
while(num<1){
    if(menu =="A"){
        break
    
    }
    else if(menu == "B"){
        num1 = user.questionInt("inisira um numero: ")
        num2 = user.questionInt("insira outro numero: ")
        console.log(num1+num2)
        var menu2 = user.question("deseja realizar outra soma: ")
        if(menu2=="sim"){
            
        }
        else if (menu2=="não"){
            break
        }
    }
    else if(menu!="A" || menu!="B"){
        console.log("comando ivalido")
        menu = user.question("escolha entre A ou B: ")
        
    }
}
