questao=$1
Q5_V2_PATH="questao5_v2"
Q5_V2_BIN=$Q5_V2_PATH/bin
Q5_V2_SOURCE=$Q5_V2_PATH/main.c
gcc -o $Q5_V2_BIN $Q5_V2_SOURCE

CLEAN(){
  rm -rf $Q5_V2_BIN
}

if [ "$questao" = "$Q5_V2_PATH" ]; then
  ./$Q5_V2_BIN
else
  cd "$questao" && node main.js
fi

CLEAN

