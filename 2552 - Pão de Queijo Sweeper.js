var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    let ordem = dados.shift().split(" ");
        let lin = parseInt(ordem.shift());
    let col = parseInt(ordem.shift());
    let mat = [];
    let count = 0;
    while(lin > 0){
        mat.push(dados.shift().trim().split(" "));
        lin--;
    }
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < col; j++){
        
            if(mat[i][j] == 0){
                if((mat[i][j + 1] !== undefined) && (mat[i][j +1] === '1')){
                if(mat[i][j +1] === '1'){
                    count++;
                }
                }
                if((mat[i][j - 1] !== undefined) && (mat[i][j - 1] === '1')){
                count++;
                
                } 
                if((mat[i - 1] !== undefined) && (mat[i - 1][j] === '1')){
                count++;
                }
            
                if((mat[i + 1] !== undefined) && (mat[i + 1][j] === '1')){
                count++;
                }
                mat[i][j] = count;
            }
            count = 0;
        }
    }
    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < col; j++){
            if(mat[i][j] === '1'){
                mat[i][j] = 9;
            }
       
        }
        console.log(mat[i].join(''));
    }
}