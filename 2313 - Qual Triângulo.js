var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split(' ');

let lados = dados.map((value) => parseInt(value));
lados.sort((a,b)=>a-b);
let condRet = ((lados[0] + lados[1] > lados[2])&&((lados[2]**2) == (lados[0]**2) + (lados[1]**2)));

if(lados[0] + lados[1] <= lados[2]){
    console.log("Invalido");
}else if(lados[0]==lados[1] && lados[1]==lados[2]){
    console.log("Valido-Equilatero");
    console.log("Retangulo: N");
}else if(lados[0]==lados[1] || lados[1]==lados[2]){
    console.log("Valido-Isoceles");
    if(condRet){
        console.log("Retangulo: S");
    }else{
        console.log("Retangulo: N");
    }
}else if(lados[0] != lados[1] && lados[1]!=lados[2]){
    console.log("Valido-Escaleno");
    if(condRet){
        console.log("Retangulo: S");
    }else{
        console.log("Retangulo: N");
    }
}
  