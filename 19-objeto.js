// //Definindo uma classe Pessoa
// class Pessoa {
//   constructor(pNome, pIdade) {
//     this.name = pNome;
//     this.idade = pIdade;
//   }
//   apresentarSe() {
//     console.log(`Olá, meu nome é ${this.name} e eu tenho ${this.idade} anos.`);
//   }
//   envelhecer() {
//     this.idade++;
//   }
// }

// //Criando objetos do "tipo" Pessoa
// var pessoa1 = new Pessoa("Talda Dienifer", 52);
// var p2 = new Pessoa("Taldo Pedrin", 18);

// pessoa1.apresentarSe();
// p2.apresentarSe();

// pessoa1.envelhecer();
// pessoa1.apresentarSe();

// p2.envelhecer();
// p2.apresentarSe();

// console.log("---------------------Abstração----------------------------------");
// //Abstração: abstrair caracteristicas importantes e descartando detalhes irrelevantes;

// class Pet {
//   constructor(nome, idade, tipo) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipo = tipo;
//   }

//   alimentar() {
//     console.log(`${this.nome} foi alimentado!`);
//   }
// }
// const meuPet = new Pet("Rex", 2, "Cachorro");
// console.log(
//   `Meu pet é um ${meuPet.tipo}, chamado ${meuPet.nome} e tem ${meuPet.idade} anos!`
// );

// meuPet.alimentar();

// console.log("------------------Herança-------------------");
// class Animal {
//   constructor(nome, idade, tipoAlimentacao) {
//     this.nome = nome;
//     this.idade = idade;
//     this.tipoAlimentacao = tipoAlimentacao;
//   }

//   alimentar() {
//     console.log(`O animal ${this.nome} foi alimentado!`);
//   }

//   emitirSom() {
//     console.log(`Barulho padrão de animal!`);
//   }
// }

// class Cachorro extends Animal {
//   alimentar() {
//     console.log(`O cachorro ${this.nome} foi alimentado!`);
//   }
//   emitirSom() {
//     console.log(`🐶Au Au🐶`);
//   }
// }
// const pet = new Animal("Bibi", 10, "Comida espacial");
// const meuCachorro = new Cachorro("Piter", 3, "Ração");

// pet.alimentar();
// pet.emitirSom();
// console.log("");
// meuCachorro.alimentar();
// meuCachorro.emitirSom();

// console.log("-----------Encapsulamento--------------")
// class Petzinho {
//     constructor(nome,idade, tipo) {
//         this.nome = nome
//         this.idade = idade
//         this.tipo = tipo
//     }

//     getNome() {
//         return this.nome
//     }

//     setNome(novoNome) {
//         this.nome = novoNome
//     }
// }
// const novoPetzinho = new Petzinho("Bob", 3, "Cachorro")

// console.log(novoPetzinho.getNome()) //Bob
// novoPetzinho.setNome("Rex")
// console.log(novoPetzinho.getNome()) //Rex

// console.log("------------Polimorfismo--------------")
// class Animalzao {
//     constructor(nome) {
//       this.nome = nome;
//     }

//     fazerBarulho() {
//       console.log("O animal faz um barulho genérico.");
//     }
//   }

//   class Dog extends Animalzao {
//     constructor(nome) {
//       super(nome);
//     }

//     fazerBarulho() {
//       console.log("O cachorro late!");
//     }
//   }

//   class Cat extends Animalzao {
//     constructor(nome) {
//       super(nome);
//     }

//     fazerBarulho() {
//       console.log("O gato mia!");
//     }
//   }

//   const animais = [
//     new Dog("Rex"),
//     new Cat("Mia"),
//     new Animalzao("Bob")
//   ]

//   for(const animal of animais) {
//     animal.fazerBarulho()
//   }

console.log("----------------Exemplos-------------------");
//Criando uma classe retangulo
class Retandangulo {
  constructor(comprimento, largura) {
    this.comprimento = comprimento;
    this.largura = largura;
  }
  obterPerimetro() {
    return this.comprimento * 2 + this.largura * 2;
  }
  obterArea() {
    return this.comprimento * this.largura;
  }
  setComprimento(novoComprimento) {
    this.comprimento = novoComprimento;
  }
  setLargura(novaLargura) {
    this.largura = novaLargura;
  }
}
//Criando um objeto do "tipo" retângulo
const ret = new Retandangulo(10, 15);

function displayRet(retangulo) {
  console.table(retangulo);
  console.log(`comprimento = ${retangulo.comprimento}`);
  console.log(`largura = ${retangulo.largura}`);
  console.log(`área = ${retangulo.obterArea()}`);
  console.log(`perimetro = ${retangulo.obterPerimetro()}`);
}

displayRet(ret);
ret.setComprimento(20);
displayRet(ret);
ret.setLargura(20);
displayRet(ret);
