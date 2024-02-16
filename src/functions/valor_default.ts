// Como deixar um valor por default ou deixar ele opcional.

function cadastro(email: string, senha: string, nome = "Aluno", idade?: number){
  let data = {email, senha, nome, idade}

  console.log(data)

}

// cadastro("Rodricosta1995@gmail.com", "Rodrigo123", "Rodrigo" , 28)


function cadastroLoja(name: string, email: string, status = false){

  console.log("Status da loja:", status)

  return status
}

cadastroLoja("Mc Donalds", "suporte@mcdonalds.com.br", true)