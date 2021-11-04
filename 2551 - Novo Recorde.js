var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 1){
    let numTrein = parseInt(dados.shift());
    let treinos = [];
    let ele = dados.shift().split(" ");
    let med = ele[1]/ele[0];

    while (numTrein > 1){
        let val = dados.shift().split(" ");
        treinos.push(val);
        numTrein--;
    }
   
    console.log("1");
    for (let i = 0; i < treinos.length; i++){
       if(treinos[i][1]/treinos[i][0] > med){
            med = treinos[i][1]/treinos[i][0];
            console.log(i + 2);
           
        }

    }
   

}