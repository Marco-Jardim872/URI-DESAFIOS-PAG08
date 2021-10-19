var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());
let frase = "Feliz natal!";
let novaFrase = frase.split("");

for(let i = 1; i < num; i++) {
    novaFrase.splice(9,0,"a");
    
}
console.log(novaFrase.join(""));