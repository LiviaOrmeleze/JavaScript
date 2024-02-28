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
