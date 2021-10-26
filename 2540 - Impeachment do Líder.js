var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while (dados.length > 1){
    let num = parseInt(dados.shift());
    let votos = dados.shift().trim().split(" ");
    let countImp = 0;
    let countArq = 0;
    let imp = (2 * num)/3;
    for (let i = 0; i <votos.length; i++) {
        if (votos[i] == 1) {
            countImp++;
        }else if (votos[i] == 0) {
            countArq++;
        }
    }

    if (countImp >= imp) {
        console.log("impeachment");
    }else{
        console.log("acusacao arquivada");
    }
}