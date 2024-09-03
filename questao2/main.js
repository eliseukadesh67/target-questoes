var fibNums = []

function isPerfectSquare(x) {
  const sqrt = Math.sqrt(x);
  return sqrt === Math.floor(sqrt);
}

function isFib(x){
  const a = 5 * (x ** 2) + 4
  const b = 5 * (x ** 2) - 4
  return isPerfectSquare(a) || isPerfectSquare(b)
}

function fastFib(k){
  if (fibNums[k] != null) {
    return fibNums[k]
  }
  
  if (k <= 1){
    fibNums[k] = k;
  }
  else {
    fibNums[k] = fastFib(k - 2) + fastFib(k - 1)
  }

  return fibNums[k]
}

function slowFib(k){
  if (k <= 1) return k;
  else return slowFib(k - 2) + slowFib(k - 1)
}

var n = 34;

console.log(`Número informado: ${n}`)
fastFib(n)
console.log(`Calculando ${n} digitos de fibonacci...`)
console.log(fibNums.join(', '))
console.log(`O numero ${n} ${isFib(n) ? "" : "não"} é um número de fibonacci`)