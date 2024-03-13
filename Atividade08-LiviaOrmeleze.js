// class Aluno {
//   constructor(ra, nome, dataNascismento, curso) {
//     this.ra = ra;
//     this.nome = nome;
//     this.dataNascismento = dataNascismento;
//     this.curso = curso;
//   }

//   calcularIdade() {
//  return 2024 - this.dataNascismento
//   }

//   apresentarSe() {
//     console.log(
//       `Olá, me chamo ${this.nome}, tenho ${this.calcularIdade()} anos, meu resgistro é ${this.ra} e estou fazendo o curso de ${this.curso}, na qual estou gostando bastante.`
//     );
//   }
// }
// var aluno1 = new Aluno("2170", "Élodi", 2007, "Desenvolvimento de Sistemas");

// aluno1.apresentarSe();

//Crie e utilize uma classe "Sorverte" contendo as propriedades : sabor, preço e tamanho (P | M | G)
//Crie um sorvete de morango grande
//Crie um sorvete de chocolante pequeno
//Crie um sorteve de melancia medio
//Altere o preço do sorvete de morango grande para R$ 10,51

class Sorverte {
  constructor(sabor, preco, tamanho) {
    this.sabor = sabor;
    this.preco = preco;
    this.tamanho = tamanho;
  }
  getPreco(){
    return this.preco
  }
  oSorvete() {
    console.log(
      `O sorvete de ${this.sabor}, de tamanho ${this.tamanho}, custa R$ ${this.getPreco()}.`
    );
  }
  setPreco(novoPreco) {
    this.preco = novoPreco;
  }
}
const sort1 = new Sorverte("Melância", 7.50, "M");
const sort2 = new Sorverte("Chocolante", 5.70, "P");
const sort3 = new Sorverte("Morango", 9.90, "G");

sort1.oSorvete();
sort2.oSorvete();
sort3.oSorvete();
console.log("-----------------------------------------------------------------------")
sort3.setPreco(10.51);
sort3.oSorvete()
console.log("-------------------------------------------------")
function saoIguaisIgnorandoCaso(texto1, texto2) {
  
  const minusculo1 = texto1.toLowerCase();
  const minusculo2 = texto2.toLowerCase();

  
  return minusculo1 === minusculo2;
}


const texto1 = "Olá Mundo";
const texto2 = "olá mundo";
const saoIguais = saoIguaisIgnorandoCaso(texto1, texto2);
console.log(saoIguais); // Output: true

console.log("-------------------------------------------------")
function extrairNumeros(str) {
  const regex = /\d+/g;
  return str.match(regex);
}

const string = "Olá! Meu número é (14) 989897867 e eu tenho 16 anos.";
const numeros = extrairNumeros(string);
console.log(numeros);
console.log("-------------------------------------------------")
function inverterFrase(frase) {
  const palavras = frase.split(" ")
  return palavras.reverse().join(" ")
  
}
const frase = "Este é um exemplo de frase invertida"
const fraseInvertida = inverterFrase(frase )
console.log(fraseInvertida)