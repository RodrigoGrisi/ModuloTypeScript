// type Array 

// let numeros: number [];

// numeros = [ 1,5,21,30,40]

// console.log(numeros)

// numeros.push(55)
// console.log('---------------')

// console.log('Meus numeros', numeros)

// let filmes: Array<string>; // tambem é certo!

// let filmes: string[] ;

let filmes: (string | number)[];

filmes = ["Filme1", "Filme2", "Filme3"]

filmes.push("Filme4")
filmes.push(5)

console.log(filmes)