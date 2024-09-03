/* Optei também por essa versão em C por ser mais fácil manipular a string "in place" ja que string em c é um array de caractéres*/

#include<stdio.h>
#define MAX 255
#define SWAP(a, b) {a = a ^ b; b = a ^ b; a = a ^ b;}

int main(){
  char str[MAX];
  int i = 0;
  int n = 0;
  
  printf("Digite a string a ser invertida:\n");
  
  char c;
  
  while ((c = getchar()) != '\n' && i < MAX - 1) {
    str[i++] = c;
    n++;
  }

  str[i] = '\0';

  printf("String lida: %s\n", str);

  for(int i = 0; i < (n/2); i++){
    SWAP(str[i], str[n - i - 1]);
  }

  printf("String invertida: %s\n", str);
  return 0;
}