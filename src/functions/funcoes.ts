
// function login(userName: string): boolean | string{

//   let message = `Seja bem vindo ${userName}`

//   console.log(message)

//   return () =>{
//     console.log(true, message)
//   } ;
//   };


// const retornFuncao = login(25)

// console.log(retornFuncao)


let n1: number = 10
let n2: number = 5

function soma(valor1: number, valor2:number): string{

  let soma = valor1 + valor2

  if(soma > 20){
    return "Maior Que 20"
  } else {
    return "Menor que 20"
  }

}

let teste = soma(n1,n2)

console.log(teste)