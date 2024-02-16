"use strict";
function mostraNome(...nomes) {
    let totalNomes = nomes.length;
    console.log(`Total de ${totalNomes} alunos`);
    nomes.map((nome) => {
        console.log(`Seja bem vindo ${nome}`);
    });
}
mostraNome("Rodrigo", "Fulana", "Pedro", "Michele");
