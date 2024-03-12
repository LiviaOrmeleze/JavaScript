class Aluno {
  constructor(ra, nome, dataNascismento, curso) {
    this.ra = ra;
    this.nome = nome;
    this.dataNascismento = dataNascismento;
    this.curso = curso;
  }

  calcularIdade() {
 return 2024 - this.dataNascismento
  }

  apresentarSe() {
    console.log(
      `Olá, me chamo ${this.nome}, tenho ${this.calcularIdade()} anos, meu resgistro é ${this.ra} e estou fazendo o curso de ${this.curso}, na qual estou gostando bastante.`
    );
  }
}
var aluno1 = new Aluno("2170", "Élodi", 2007, "Desenvolvimento de Sistemas");

aluno1.apresentarSe();
