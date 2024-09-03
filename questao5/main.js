const str = "abba"
const size = str.length

let reversed = []

for (var i = 0; i < size; i = i + 1){
  reversed[i] = str[size - i - 1]
}

console.log(reversed.join(''))