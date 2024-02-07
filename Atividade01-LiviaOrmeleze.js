var nome = "Maria";
var banco = "Itaú";
var agencia = 217;
var conta = 27;
var saldo = 3000;

console.log("Olá,", nome, "eu sou o banco", banco);
console.log("o número da sua agência é:", agencia);
console.log("o número da sua conta é:", conta);
console.log("e o seu saldo é:", saldo,'reais');

console.log('')
saldo -=400;
console.log(nome,'você gastou R$400,00 em uma loja de roupas, o seu saldo é de:', saldo,'reais')
saldo +=1000
console.log('Parabéns', nome, 'você ganhou um prêmio de R$ 1.000,00, o seu saldo é de:',saldo,'reais')
saldo +=3000
console.log(nome,'você recebeu um pix de R$ 3.000,00, o seu saldo é de:', saldo,"reais")
saldo -=200
console.log("Querida cliente, você gastou R$ 200,00 em um restaurante, agora o seu saldo é de:", saldo,'reais')
saldo += 3000
console.log(nome, "o seu salário foi depositádo, o valor do seu saldo é de:", saldo,'reais')

console.log('')
console.log("Olá novamente,", nome, "eu sou o banco", banco)
console.log("o número da sua agência é:", agencia);
console.log("o número da sua conta é:", conta);
console.log("e o seu saldo é:", saldo,'reais');