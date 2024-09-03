# Questões Técnicas - Target Sistemas

## Como executar as questões

As 5 questões foram feitas em Javascript (e a questão 5 também em C), então para executar basta utilizar o Node.

Por exemplo:

```
node questao1/main.js 
```

A questão 5 também possui uma solução em C que pode ser executada utilizando o compilador gcc da seguinte forma:

Compilando o código:

```
gcc -o nome-executavel questao5_v2/main.c
```

Executando:

```
./nome-executavel
```

Opcionalmente é possível utilizar o script ```run.sh``` para executar qualquer questão, basta passar o nome da pasta da questão como argumento

Exemplo de uso:

```
run.sh questao1
```