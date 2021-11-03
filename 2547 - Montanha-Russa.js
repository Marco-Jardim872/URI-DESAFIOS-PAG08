var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let valores = dados.shift().trim().split(" ");
    let numVis = valores.shift();
    let altMin = valores.shift();
    let altMax = valores.shift();
    let alturas = [];
    let count = 0;
    if(numVis < 1 || numVis > 100){
        break;
    }

    while(numVis > 0){
        alturas.push(parseInt(dados.shift()));
        numVis--;
    }
    for (let i = 0; i < alturas.length; i++) {
        if(alturas[i] >= altMin && alturas[i] <= altMax){
            count++;
        }
    }
    console.log(count);

}