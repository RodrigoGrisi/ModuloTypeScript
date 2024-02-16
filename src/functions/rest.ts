// rest params com typescript 


// function totalVendas(...vendas: number[]): void{

//   const quantidadeVendas = vendas.length

//   const total = vendas.reduce((acc: number, venda:number ) => acc+ venda,0)

//   if(quantidadeVendas <= 1){
//     return console.log(`Foi feita ${quantidadeVendas} venda - R$ ${total}`)
//   }else {
//     return console.log(`Foram feitas ${quantidadeVendas} vendas - R$ ${total}`)
//   }

// }

// totalVendas(10, 30, 25, 30.30)

function mostraNome(...nomes: string[]){

  let totalNomes = nomes.length
  console.log(`Total de ${totalNomes} alunos`)
  // console.log(`Total de ${nomes.length} alunos`)

  nomes.map((nome)=>{
    console.log(`Seja bem vindo ${nome}`)
  })
}

mostraNome("Rodrigo", "Fulana", "Pedro", "Michele")


