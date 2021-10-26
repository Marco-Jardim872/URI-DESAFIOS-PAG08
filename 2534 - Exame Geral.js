var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 1){
    let val = dados.shift().trim().split(" ");
    let numHab = val.shift();
    let numCon = val.shift();
    let notas = [];
    while (numHab) {
        notas.push(parseInt(dados.shift()));
        numHab--;
    }
    let notasOrdem = notas.sort((a,b)=> b-a);

    while (numCon) {
    console.log(notasOrdem[parseInt(dados.shift()) - 1]);
       
    numCon--;
    }

}