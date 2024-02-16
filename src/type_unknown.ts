
// TIPO DESCONHECIDO 
// Quando você não sabe o tipo que vai receber.

let total2: unknown;

total2 = 2;
total2 = "360"; 

total2 = {
  total: 100,
  subTotal: 80
}

// console.log(total2)

let idPedido: any = 123

let totalPedido: unknown = 20

let entregador: number = idPedido;

let totalEntrega: any = totalPedido

let recurso: number = totalEntrega

console.log(recurso)