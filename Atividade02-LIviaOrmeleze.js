var nome = "Livia";
var anoDeNascimento = 2007;
var anoAtual = 2024;

console.log(nome, "nasceu em", anoDeNascimento);

anoAtual -= anoDeNascimento;
var idade = anoAtual;
console.log(nome, "tem", idade, "anos");

console.log("--------------------------------------------------");
var comprimento = 12;
var largura = 6;

comprimento *= largura;
console.log("Um retângulo possui 12cm de comprimento e 6cm de largura");
console.log("A área do retângulo é:", comprimento, "cm²");
console.log("Sua aultura é de 5cm");

var altura = 5;
comprimento *= altura;

console.log("O volume do retângulo é:", comprimento, "cm³");
console.log("--------------------------------------------------");
var a = 2;
var b = 3;
var c = -1;
var delta = b ** 2 - 4 * a * c;
console.log("Na equação 2x²+3x-1, o valor de delta é:", delta);
console.log("--------------------------------------------------");
var compra = 450;
var desconto = compra * 0.03;
var ValDescon = compra -= desconto;
console.log(
  "Agostinho fez uma compra de R$450,00 e obteve 3% de desconto, o valor do seu desconto é de:",
  desconto
);

console.log("O valor final de sua compra é de R$", ValDescon);
console.log("--------------------------------------------------");
var velo = 95;
var tempo = 3.5 
var distancia = velo * tempo 
console.log("A distância percorrida é de:", distancia, "km")