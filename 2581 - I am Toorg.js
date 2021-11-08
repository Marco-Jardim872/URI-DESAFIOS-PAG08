var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let num = dados.shift();

    while(num > 0){
        console.log("I am Toorg!");
        num--;
    }

}