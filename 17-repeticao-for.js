//laço de repetição FOR
//escrever para o usuário 1000x "Preste mais atenção na aula"

// for (let i  = 0; i < 1000; i++) {
//     console.log("Preste mais atenção na aula");

// }

for (let i = 1; i <= 1000; i += 2) {
  console.log(i);
}

console.log("-----------------------------------------------");

//Escreva todos os números de 1 a 20 com FOR
for (let i = 1; i <= 20; i++) {
  console.log(i);
}

console.log("------------------------------------");

//Escrever todos os números PARES de 1 a 20 com FOR
for (let i = 2; i < 20; i += 2) {
  console.log(i);
}

for (let i = 1; i <= 20; i++) {
  if (i % 2 == 0);
  console.log(i);
}
console.log("-----------------------------------------------");
//Dado um vetor com números 5,6,8,14,0,9,7,2
//Caucule e exiba a somatória de seus elementos

const numeros = [5, 6, 8, 14, 0, 9, 7, 2];
var somar = 0;

for (let i = 0; i < numeros.length; i++) {
  somar += numeros[i];
}
console.log(`A soma dos elementos do array é: ${somar}`);

// Dado um vetor com números 5,6,8,14,0,9,7,2
// Multiplique todos os seus elementos por 3 utilizando o loop FOR
// Em seguida, mostre o novo vetor

var num = [5, 6, 8, 14, 9, 7, 2];
console.table(num);

for (let i = 0; i < num.length; i++) {
  num[i] *= 3
}
console.table(num);


// Dada a matriz 2x3, escever para o usúario todos os seus elementos 
// com as respectivas posições da matriz 
//[8,4,1]
//[3,7,8]

var matriz = [
  [8,4,1],
  [3,7,8]
]
console.table(matriz);

for (let linha = 0; linha < matriz.length; linha++){
  for (let coluna = 0; coluna < matriz[0].length; coluna++ ){
    console.log(`Matriz[${linha},${coluna}] = ${matriz[linha][coluna]}`)
  }
}

