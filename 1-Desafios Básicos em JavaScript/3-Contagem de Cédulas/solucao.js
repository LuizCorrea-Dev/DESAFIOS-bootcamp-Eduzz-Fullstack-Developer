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