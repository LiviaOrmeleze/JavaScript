// var popA = 100003;
// var popB = 300004;
// var ano = 0;

// while (popA < popB) {
//   ano++;
//   popA *= 1.03;
//   popB *= 1.015;
// }
// console.log(
//   `A população A (${Math.round(popA)}) irá passar a população B (${Math.round(
//     popA
//   )}) em ${ano} anos!`
// );

// Criar um "jogo da velha" que mostre as informações dentro da imagem abaixo. Inserir as informações de forma randomica, Informar ao final quem ganho X ou O
const tabuleiro = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];
let jogadorX = "X";
let jogadorO = "O";


function jogar(jogador) {
  let linha, coluna;
  do {
    linha = Math.floor(Math.random() * 3);
    coluna = Math.floor(Math.random() * 3);
  } while (tabuleiro[linha][coluna] !== " ");

  tabuleiro[linha][coluna] = jogador;
}
jogar(jogadorO)
jogar(jogadorX)
jogar(jogadorO)
jogar(jogadorX)
jogar(jogadorO)
jogar(jogadorX)
jogar(jogadorO)
jogar(jogadorX)
jogar(jogadorO)
console.table(tabuleiro);

switch (true) {
  case tabuleiro [0][2] === tabuleiro[1][2]&&
    tabuleiro[1][2] === tabuleiro[2][2]:
    if (tabuleiro[0][2] == "x") {
      console.log(first)
    }
    break;

  default:
    break;
}