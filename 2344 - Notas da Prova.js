var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = parseInt(dados.shift());

if(num >= 86 && num <= 100){
    console.log("A");
}else if(num >= 61 && num <= 85){
    console.log("B");
}else if(num >= 36 && num <= 60){
    console.log("C");
}else if(num >= 1 && num <= 35){
    console.log("D");
}else if(num === 0){
    console.log("E");
}