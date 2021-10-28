var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 1){
    let numAtr = parseInt(dados.shift());
    let valCar = dados.shift().split(" ");
    let numCarMar = parseInt(valCar.shift());
    let numCarLeo = parseInt(valCar.shift());
    let barMar = [];
    let barLeo = [];
    if(numAtr < 1 || numAtr > 100){
        break;
    }
    while(numCarMar){   
    barMar.push((dados.shift().trim().split(" ")).map((value)=>parseInt(value)));
    numCarMar--;
    }
    while(numCarLeo){   
    barLeo.push((dados.shift().trim().split(" ")).map((value)=>parseInt(value)));
    numCarLeo--;
    }
    let carEscolhidas = dados.shift().trim().split(" ");
    let carEscolhidaMar = parseInt(carEscolhidas.shift()) - 1;
    let carEscolhidaLeo = parseInt(carEscolhidas.shift()) - 1;
    let atrSorteado = parseInt(dados.shift()) - 1;
    let valorAtrMar;
    let valorAtrLeo;
    for(let i = 0; i < barMar.length; i++){ 
    for(let j = 0; j < numAtr; j++){
      valorAtrMar = barMar[carEscolhidaMar][atrSorteado];
    }
    }

    for(let i = 0; i <= barLeo.length; i++){    
    for(let j = 0; j <= numAtr; j++){
        valorAtrLeo = barLeo[carEscolhidaLeo][atrSorteado];
    }
    }
    if(valorAtrMar > valorAtrLeo){
        console.log("Marcos");
    }else if(valorAtrMar < valorAtrLeo){
        console.log("Leonardo");
    }else{
        console.log("Empate");
    }
}