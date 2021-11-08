var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dados = input.split('\n');

let num = dados.shift();
    while(num > 0){
        let val = dados.shift().trim().split(" ");
        let soma = parseInt(val[0]) + parseInt(val[1]);
        let musica;
        switch(soma){
            case 0:
                musica = "PROXYCITY";
                break;
            case 1:
                musica = "P.Y.N.G.";
                break;
            case 2:
                musica = "DNSUEY!";
                break;
            case 3:
                musica = "SERVERS";
                break;
            case 4:
                musica = "HOST!";
                break;
            case 5:
                musica = "CRIPTONIZE";
                break;
            case 6:
                musica = "OFFLINE DAY";
                break;
            case 7:
                musica = "SALT";
                break;
            case 8:
                musica = "ANSWER!";
                break;
            case 9:
                musica = "RAR?";
                break;
            case 10:
                musica = "WIFI ANTENNAS";
                break;
               
        }
        console.log(musica);
        num--;
        val = [];
    }