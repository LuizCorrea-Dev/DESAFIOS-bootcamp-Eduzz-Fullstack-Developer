## Desafio

Faça a leitura de um valor inteiro. Em seguida, calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto. As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1. Na sequência mostre **o valor lido** e a relação de notas necessárias.

## Entrada

Você receberá um valor inteiro **N** (0 < **N** < 1000000).

## Saída

Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

 

| Exemplo de Entrada | Exemplo de Saída                                             |
| ------------------ | ------------------------------------------------------------ |
| 576                | 576<br/>5 nota(s) de R\$ 100,00<br/>1 nota(s) de R\$ 50,00<br/>1 nota(s) de R\$ 20,00<br/>0 nota(s) de R\$ 10,00<br/>1 nota(s) de R\$ 5,00<br/>0 nota(s) de R\$ 2,00<br/>1 nota(s) de R\$​​​ 1,00 |
|                    |                                                              |
| 11257              | 11257<br/>112 nota(s) de R\$ 100,00<br/>1 nota(s) de R\$ 50,00<br/>0 nota(s) de R\$ 20,00<br/>0 nota(s) de R\$ 10,00<br/>1 nota(s) de R\$ 5,00<br/>1 nota(s) de R\$ 2,00<br/>0 nota(s) de R\$​​ 1,00 |
| 503                | 503<br/>5 nota(s) de R\$ 100,00<br/>0 nota(s) de R\$ 50,00<br/>0 nota(s) de R\$ 20,00<br/>0 nota(s) de R\$ 10,00<br/>0 nota(s) de R\$ 5,00<br/>1 nota(s) de R\$ 2,00<br/>1 nota(s) de R\$​ 1,00 |

#### Solução

```javascript
let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];
let quantia = parseInt(gets());
let resto = quantia;
while (resto >= 1) {
  nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}
print(quantia);
print(nnotas[0] + " nota(s) de R$ 100,00");
print(nnotas[1] + " nota(s) de R$ 50,00");
print(nnotas[2] + " nota(s) de R$ 20,00");
print(nnotas[3] + " nota(s) de R$ 10,00");
print(nnotas[4] + " nota(s) de R$ 5,00");
print(nnotas[5] + " nota(s) de R$ 2,00");
print(nnotas[6] + " nota(s) de R$ 1,00");
```

