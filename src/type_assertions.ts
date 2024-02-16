// afirmando algum tipo


let statusAtual: unknown = 25.59;

let mudaStatus: number = 0;

// AFIRMANDO QUE É UM NUMERO.
mudaStatus = statusAtual as number;

// OUTRA MANEIRA DE AFIRMAR
mudaStatus = <number>statusAtual

// console.log(mudaStatus)

let query: unknown = 'Pizza';

let searchTerm: string = query as string;

console.log(searchTerm)
console.log( typeof searchTerm)
console.log( typeof query)