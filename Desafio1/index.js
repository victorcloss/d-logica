let nomeJogador = "Arthur";
let expJogador = 110000;
let rankJogador = "";

if (expJogador <= 1000) {
    rankJogador = "Ferro";
} else if (expJogador >= 1001 && expJogador <= 2000) {
    rankJogador = "Bronze";
} else if (expJogador >= 2001 && expJogador <= 5000) {
    rankJogador = "Prata";
} else if (expJogador >= 5001 && expJogador <= 7000) {
    rankJogador = "Ouro";
} else if (expJogador >= 7001 && expJogador <= 8000) {
    rankJogador = "Platina";
} else if (expJogador >= 8001 && expJogador <= 9000) {
    rankJogador = "Ascendente";
} else if (expJogador >= 9001 && expJogador <= 10000) {
    rankJogador = "Imortal";
} else if (expJogador >= 10001) {
    rankJogador = "Radiante";
}

console.log("O heroi de nome " + nomeJogador + " esta no nivel de " + rankJogador);



