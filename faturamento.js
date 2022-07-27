// Caio Henrique Pedroso Pedro

// Infelizmente não recebi o email com o vetor preenchido
// vou supor que o vetor esteja preenchido com 30 valores randomicos

let faturamento = new Array(30);

//preenche o vetor com valores randomicos
for (let i = 0; i < faturamento.length; i++) {
  faturamento[i] = Math.floor(Math.random() * 100);
}

console.log("Vetor preenchido com valores randomicos: ", faturamento);

// acha o minimo do vetor
let minimo = Math.min(...faturamento);
let maximo = Math.max(...faturamento);

//retira valores 0 do vetor
let faturamentoSemZero = faturamento.filter(function (valor) {
  return valor > 0;
});

let media =
  faturamentoSemZero.reduce(function (total, valor) {
    return total + valor;
  }, 0) / faturamentoSemZero.length; //media dos valores do vetor

let faturamentoMaiorQueMedia = faturamentoSemZero.filter(
  function (valor) {
    return valor > media;
  } // calcula o faturamento maior que a media
);

console.log(
  `O menor valor de faturamento ocorrido no mês foi: R$${minimo.toFixed(2)}`
);
console.log(
  `O maior valor de faturamento ocorrido no mês foi: R$${maximo.toFixed(2)}`
);
console.log(
  `A média de faturamento ocorrido no mês foi: R$${media.toFixed(2)}`
);
console.log(
  `O numero de dias em que o faturamento foi maior que a media foi: ${faturamentoMaiorQueMedia.length}`
);
