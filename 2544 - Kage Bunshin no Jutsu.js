var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 1){
    
    let cop = parseInt(dados.shift());
    let numTec = 0;
    if (cop < 1 || cop > Math.pow(10,6)){
        continue;
    }
    
    while(cop != 1){
        if(cop < 2){
            numTec = 1;
        }
        cop = cop/2;
        numTec++;
    }
    
    console.log(numTec);
}