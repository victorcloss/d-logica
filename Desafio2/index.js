let wins = 60
let losts = 15

let saldoWL = calcularSaldoRank(wins,losts)
let rank = calcularRank(saldoWL)

console.log("O Herói tem de saldo de " + saldoWL + " está no nível de "+ rank)

function calcularSaldoRank(W,L){
    let saldo = W - L
    return saldo
}

function calcularRank(saldo){
    if (saldo <= 10)
        return "Ferro"
    else if (saldo >= 11 && saldo <=20)
        return "Bronze"
    else if (saldo >= 21 && saldo <=50)
        return "Prata"
    else if (saldo >= 51 && saldo <=80)
        return "Ouro"
    else if (saldo >= 81 && saldo <=90)
        return "Diamante"
    else if (saldo >= 91 && saldo <=100)
        return "Lendario"
    else if (saldo >= 101)
        return "Imortal"
}

