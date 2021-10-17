var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let numComp = parseInt(dados.shift());
let somaNotas = 0;
let notaFinal = 0;

while(numComp > 0){
    let jog = dados.shift().trim();
    let dif = (dados.shift().split(" ")).map((value)=>parseFloat(value));
    let notas = (dados.shift().split(" ")).map((value)=>parseFloat(value));
    notas.sort((a,b)=> a - b);
    for(let i=1;i < notas.length - 1;i++){
        somaNotas += notas[i];
    }
    notaFinal = (somaNotas * dif).toFixed(2);
    
    console.log(jog + " " + notaFinal);
       
    numComp--;
    somaNotas = 0;
}