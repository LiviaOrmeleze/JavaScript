// const numeros = [1,2,3,4,5]
// console.log(numeros)
// console.log(numeros[2])

// numeros[2]=6
// console.log(numeros)
// console.log(numeros[2])

//Criando variáveis do tipo array (vetores)

var dinos = ["Tiranossauro Rex", "Estegossauro", "Anquilossauro"];
console.log(dinos); //retorna todos os itens do array
console.log(dinos[0]); //retorna o primeiro indice do array
console.log("");
console.table(dinos); // cria tabela com os itens do array
console.log("O vetor tem", dinos.length, "elementos!"); //mostarndo quantidade de itens

//adicionando elementos ao vetor existente
dinos.push("Brontossauro", "Velocirapitor"); //array.push adiciona um item no final do vetor
console.table(dinos);

dinos.unshift("Tricerátops"); //adicions itens no inicio do array
console.table(dinos);

//Alterando elementos com base no índice (posição)
dinos[3] = "Titanossauro";
console.table(dinos);

//Obtendo um elemento com base em seu índice
console.log("Primeira posição:", dinos[0]);
console.log("Primeira posição:", dinos[1]);
console.log("item da posição 20:", dinos[20]); //retomada indefinido

//Removendo elemento do vetor
dinos.pop(); //remove o último elemento do vetor
console.table(dinos);

dinos.shift(); //remove o primeiro elemento do vetor
console.table(dinos);

dinos.splice(1, 1); //remove o elemento a partir do índice 1, contando 1.
console.table(dinos);

console.log("");
console.log("-----------Continuação Aula------------");
var dinos = [
  "Tricerátops",
  "Tiranossauro Rex",
  "Estegossauro",
  "Anquilossauro",
  "Brontossauro",
  "Pterodáctilo",
  "Espinossauro",
  "Megalossauro",
];

console.table(dinos);

var elementoProcurado = "Brontossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Pterodáctilo";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

var elementoProcurado = "Megalossauro";
var posicao = dinos.indexOf(elementoProcurado);
console.log("O " + elementoProcurado + " está no índice " + posicao);

// Criando cópia de array (vetor)
var copia1 = dinos.slice(); //.slice() faz uma cópia real do item de vetor
console.log("Vetor cópia 1");
console.table(copia1);

var copia2 = dinos.slice(1, 3)
console.log("Vetor cópia 2")
console.table(copia2);