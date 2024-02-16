 // Exemplo com arrow function

// function retornoAPI(url: string): string {
    
//   return `Retorno da função: ${url}`
// }

// const backfunction = retornoAPI("https://www.google.com.br")

// console.log(backfunction)


const retornoAPI = (url: string): void =>{
    console.log("URL DA API", url)
  }
  
  retornoAPI("https://www.google.com.br")
