var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let tab = {"suco de laranja":120,
"morango fresco":85,
"mamao":85,
"goiaba vermelha":70,
"manga":56,
"laranja":50,
"brocolis":34
};
let num; 
let cons = 0;
while(num !== 0){
    num = parseInt(dados.shift());
    if(num === 0){
        break;
    }
    let item = num;
    while(item > 0){
        let ele = dados.shift().split(" ");
        let qt  = ele.shift();
        let ali = (ele.join(" ")).trim();
        cons += (qt * tab[ali]);
        item--;
    }
    if(cons > 130){
        console.log("Menos " + (cons - 130) + " mg");
    }else if(cons < 110){
        console.log("Mais " + (110 - cons) + " mg");
    }else if(cons >= 110 && cons <= 130){
        console.log(cons + " mg");
    }
    ele = [];
    cons = 0;
    
}
