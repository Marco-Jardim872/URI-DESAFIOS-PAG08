var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 1){
    let letras = dados.shift().trim().split("");
    let numLampPisc = parseInt(dados.shift());
    let lamp = dados.shift().trim().split(" ");
    let frase = [];
    if((numLampPisc == lamp.length) && (numLampPisc >=1 && numLampPisc <= 10000)){
        for(let valor of lamp){
            frase.push(letras[valor - 1]);
        }
    }
    console.log(frase.join(""));
    
}