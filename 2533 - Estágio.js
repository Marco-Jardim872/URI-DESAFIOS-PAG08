var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 1){
    let numDis = parseInt(dados.shift());
    let notas = [];
    let cH = [];
    let notaPcH = [];

    while (numDis){
        let val = (dados.shift()).split(" ");
        notaPcH.push(val.reduce((acc,value)=> acc * value));
        notas.push(parseInt(val.shift()));
        cH.push(parseInt(val.shift()));
        numDis--;
    }

    let totalCh = cH.reduce((acc,value)=>acc + value) * 100;
    let ira = ((notaPcH.reduce((acc,value)=>acc + value))/totalCh).toFixed(4);

    console.log(ira);
}