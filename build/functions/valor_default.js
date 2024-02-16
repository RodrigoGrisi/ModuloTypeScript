"use strict";
function cadastro(email, senha, nome = "Aluno", idade) {
    let data = { email, senha, nome, idade };
    console.log(data);
}
function cadastroLoja(name, email, status = false) {
    console.log("Status da loja:", status);
    return status;
}
cadastroLoja("Mc Donalds", "suporte@mcdonalds.com.br", true);
