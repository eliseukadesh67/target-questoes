const strings = ["abcdefg", "bcdfgdeeasdw", "aaabbb"];
var stringsReverse = [] 
console.log(`Strings originais:\n${strings.join(", ")}\n`);

strings.forEach((str) => {
  const size = str.length
  let reversed = [];

  for (var i = 0; i < size; i = i + 1) {
    reversed[i] = str[size - i - 1];
  }

  stringsReverse.push(reversed.join(""));
});

console.log(`Strings invertidas:\n${stringsReverse.join(", ")}`)
