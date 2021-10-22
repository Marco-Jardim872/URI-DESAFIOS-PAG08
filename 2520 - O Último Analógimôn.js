var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

while(dados.length > 0){
    
    let ordem = (dados.shift()).split(" ");
    let lin = parseInt(ordem.shift());
    let col = parseInt(ordem.shift());
    let cid = [];
    if((lin >= 2 && lin <= 100) && (col >= 2 && col <= 100)){
        while(lin){
            let ele = (dados.shift()).trim().split(" ");
            if(ele.length == col){
                cid.push(ele);
            }
            lin--;
        }

        let jog = [];
        let alv = [];
        for(let i = 0; i < cid.length; i++){
            for(let j = 0; j < col; j++){
                if(cid[i][j] == 1){
                    jog.push(i);
                    jog.push(j);
                }
                if(cid[i][j] == 2){
                    alv.push(i);
                    alv.push(j);
                }
            }
        }
      
        let tempo = 0;
        if(jog[0] >= alv[0] && jog[1] >= alv[1]){
            tempo = (jog[0] - alv[0]) + (jog[1] - alv[1]);
        }else if(jog[0] >= alv[0] && jog[1] < alv[1]){
            tempo = (jog[0] - alv[0]) + (alv[1] - jog[1]);
        }else if(jog[0] < alv[0] && jog[1] >= alv[1]){
            tempo = (alv[0] - jog[0]) + (jog[1] - alv[1]);
        }else if(jog[0] < alv[0] && jog[1] < alv[1]){
            tempo = (alv[0] - jog[0]) + (alv[1] - jog[1]);
        }
   

        console.log(tempo);
    }
   
}