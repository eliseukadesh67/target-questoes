questao=$1
gcc -o questao5/bin questao5/main.c

CLEAN(){
  rm -rf questao5/bin
}

if [ "$questao" = "questao5_v2" ]; then
  ./questao5/bin
else
  cd "$questao" && node main.js
fi

CLEAN

