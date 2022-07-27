// Caio Henrique Pedroso Pedro

let faturamentoSP = 67836.43;
let faturamentoMG = 29229.88;
let faturamentoRJ = 36678.66;
let faturamentoES = 27165.48;
let outrosEstados = 19849.53;

let totalFaturamento =
  faturamentoSP + faturamentoMG + faturamentoRJ + faturamentoES + outrosEstados;
console.log(`O total de faturamento foi: R$${totalFaturamento.toFixed(2)}`);

console.log(
  `O faturamento do estado de SP representa: ${(
    (faturamentoSP / totalFaturamento) *
    100
  ).toFixed(2)}%`
);
console.log(
  `O faturamento do estado de MG representa: ${(
    (faturamentoMG / totalFaturamento) *
    100
  ).toFixed(2)}%`
);
console.log(
  `O faturamento do estado de RJ representa: ${(
    (faturamentoRJ / totalFaturamento) *
    100
  ).toFixed(2)}%`
);
console.log(
  `O faturamento do estado de ES representa: ${(
    (faturamentoES / totalFaturamento) *
    100
  ).toFixed(2)}%`
);
console.log(
  `O faturamento de outros estados representa: ${(
    (outrosEstados / totalFaturamento) *
    100
  ).toFixed(2)}%`
);
