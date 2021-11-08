var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while (dados.length > 1){
    let val = dados.shift().split(" ");
    let numPes = parseInt(val.shift());
    let numDatas = parseInt(val.shift());
    let datas;
    let todasDatas = [];
    let todosCount = [];
    let count = 0;
    let maiorCount;

    while(numDatas > 0){
        datas = dados.shift().trim().split(" ");
        todasDatas.push(datas.shift());
        for(let i = 0; i < datas.length; i++){
            if(datas[i] == 1){
                count++;
            }
        }
        todosCount.push(count);
        count = 0;
            numDatas--;
    }
    
    if(todosCount.some((value)=>value == numPes)){
        maiorCount = todosCount.findIndex((value)=> value == numPes);
            
        
        console.log(todasDatas[maiorCount]); 
    }else{
        console.log("Pizza antes de FdI");
    }
           
}