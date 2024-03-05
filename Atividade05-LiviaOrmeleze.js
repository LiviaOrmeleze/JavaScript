function idade(anoDeNacismento, anoAtual) {
  return anoAtual - anoDeNacismento;
}

console.log(`A idade da pessoa é: ${idade(2007, 2024)} anos`);

function Viagem(lts) {
  return lts * 12;
}

var litros = 50;
var comb = Viagem(litros);

console.log(`O carro viaja ${comb} Kms, com ${litros} litros`);

console.log("------------------------------------------------------");
var idade = 13;
var pessoa = idade >= 16 ? "Você pode votar!" : "Você não pode votar!";
console.log(pessoa);

console.log("------------------------------------------------------");
function votação(idade) {
switch (true) {
  case idade  <= 15:
    console.log(`Você não pode votar!`);
    break;
  case idade >= 16 && idade < 18:
    console.log(`Você pode votar, mas não é obrigatório!`);
    break;
  default:
    console.log(`Você pode votar!`);
    break;
}
}
votação (18)