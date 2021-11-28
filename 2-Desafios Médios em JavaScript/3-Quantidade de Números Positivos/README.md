## Desafio

Crie um programa que leia 6 valores, os quais poderão ser negativos e/ou positivos. Em seguida, apresente a quantidade de valores positivos digitados.

## Entrada

Você receberá seis valores, negativos e/ou positivos.

## Saída

Exiba uma mensagem dizendo quantos valores positivos foram lidos. assim como é exibido abaixo no exemplo de saída. Não se esqueça de incluir na mensagem de saída o sufixo " valores positivos", conforme o exemplo abaixo:

 

| Exemplo de Entrada | Exemplo de Saída    |
| ------------------ | ------------------- |
| 7                  | 4 valores positivos |
| -5                 |                     |
| 6                  |                     |
| -3.4               |                     |
| 4.6                |                     |
| 12                 |                     |

#### Solução

```javascript
var n1 = parseFloat(gets());
var n2 = parseFloat(gets());
var n3 = parseFloat(gets());
var n4 = parseFloat(gets());
var n5 = parseFloat(gets());
var n6 = parseFloat(gets());
var i = 0;
if (n1 > 0) {i++} 
if (n2 > 0) {i++} 
if (n3 > 0) {i++} 
if (n4 > 0) {i++} 
if (n5 > 0) {i++} 
if (n6 > 0) {i++}
console.log(i + " valores positivos");
```

