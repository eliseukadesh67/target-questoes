const faturamentos = require("./dados.json")


let faturamentosFiltered = faturamentos.filter((faturamento) => faturamento.valor > 0)
const valores  = faturamentosFiltered.map((faturamento) => faturamento.valor)
const menorValor = Math.min(...valores)
const maiorValor = Math.max(...valores)
const somaFaturamentos = valores.reduce((acc, valor) => acc + valor, 0)
const media = somaFaturamentos / faturamentosFiltered.length

let diasAcimaMedia = 0

valores.forEach((valor) => {
  if (valor > media) {
    diasAcimaMedia++
  }
})

console.log(`Menor valor de faturamento do mês: ${menorValor}`)
console.log(`Maior valor de faturamento do mês: ${maiorValor}`)
console.log(`Média mensal: ${media}`)
console.log(`Números de dias no mês em que o valor de faturamento diário foi superior à media mensal: ${diasAcimaMedia}`)
