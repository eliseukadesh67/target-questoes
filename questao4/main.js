const faturamentos = new Map([
  ["SP", 67836.43],
  ["RJ", 36678.66],
  ["MG", 29229.88],
  ["ES", 27165.48],
  ["Outros", 19849.53]
])

const values = faturamentos.values();

const totalMensal = Array.from(values).reduce((acc, valor) => acc + valor, 0);

console.log(`Estado\tFaturamento\tPercentual`)

faturamentos.forEach((value, key) => {
  const percent = value / totalMensal * 100;
  console.log(`${key}\t${value}\t${percent.toFixed(2)}%`)
})