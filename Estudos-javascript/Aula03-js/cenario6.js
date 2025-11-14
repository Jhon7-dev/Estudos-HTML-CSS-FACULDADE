function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.apresentar = function() {
    return `Olá, eu sou ${this.nome} e tenho ${this.idade} anos.`;
  };
}

const pessoa1 = new Pessoa("Carlos", 30);
const pessoa2 = new Pessoa("Beatriz", 22);

console.log(pessoa1.apresentar());
console.log(pessoa2.apresentar()); 