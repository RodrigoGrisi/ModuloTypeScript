"use strict";
let n1 = 10;
let n2 = 5;
function soma(valor1, valor2) {
    let soma = valor1 + valor2;
    if (soma > 20) {
        return "Maior Que 20";
    }
    else {
        return "Menor que 20";
    }
}
let teste = soma(n1, n2);
console.log(teste);
