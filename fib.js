// Caio Henrique Pedroso Pedro

function isFibonacci(x) {
  // x é um número inteiro a ser testado se está na sequencia
  if (x <= 1) {
    return true;
  }
  let a = 0;
  let b = 1;
  let c = a + b;
  while (c < x) {
    a = b;
    b = c;
    c = a + b;
    if (c === x) {
      return true; // x está na seq. fibonacci
    }
  }
  return false; // a sequencia ficou maior que x ele não foi encontrado
}

console.log(isFibonacci(0));
console.log(isFibonacci(4));
console.log(isFibonacci(8));
console.log(isFibonacci(9));
console.log(isFibonacci(13));
console.log(isFibonacci(15));
