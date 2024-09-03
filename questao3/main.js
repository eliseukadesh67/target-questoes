const faturamento = require("./faturamento.json")

const mes = "abril"

var faturamentosMes = faturamento[mes]
faturamentosMes = faturamentosMes.filter(valor => valor > 0)
const menorValor = Math.min(...faturamentosMes)
const maiorValor = Math.max(...faturamentosMes)
const somaFaturamentos = faturamentosMes.reduce((acc, valor) => acc + valor, 0)
const media = somaFaturamentos / faturamentosMes.length;

const diasAcimaMedia = faturamentosMes.reduce((acc, valor) => {
  return valor > media ? acc + 1 : acc;
}, 0)

console.log(`Menor valor de faturamento do mês de ${mes} : ${menorValor}`)
console.log(`Maior valor de faturamento do mês de ${mes} : ${maiorValor}`)
console.log(`Média mensal: ${media}`)
console.log(`Números de dias no mês em que o valor de faturamento diário foi superior à media mensal: ${diasAcimaMedia}`)
