var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
while(num){
    let vilao = (dados.shift()).split(" ");
    for (let value of vilao){
        if(value != "Batmain"){
            console.log("Y");
        }else{
            console.log("N");
        }
    }
    num--;
    
}