var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let numJog = parseInt(dados.shift());
let tentSq = 0 ;
let tentBl = 0;
let tentAt = 0;
let sucesSq = 0;
let sucesBl = 0;
let sucesAt = 0;
let percSq = 0;
let percBl = 0;
let percAt = 0;
while(numJog > 0){
    let jog = dados.shift();
    let tent = (dados.shift().split(" ")).map((value)=>parseInt(value));
    let suces = (dados.shift().split(" ")).map((value)=>parseInt(value));
    tentSq += tent[0];
    tentBl += tent[1];
    tentAt += tent[2];
    sucesSq += suces[0];
    sucesBl += suces[1];
    sucesAt += suces[2];
    
    numJog--;

}
percSq = ((100 * sucesSq)/tentSq).toFixed(2);
percBl = ((100 * sucesBl)/tentBl).toFixed(2);
percAt = ((100 * sucesAt)/tentAt).toFixed(2);
console.log("Pontos de Saque: " + percSq + " %.");
console.log("Pontos de Bloqueio: " + percBl + " %.");
console.log("Pontos de Ataque: " + percAt + " %.");