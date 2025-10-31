
// Estrutura mais flexível e sem tipos fixos.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibir() {
        console.log(`${this.nome} tem ${this.idade} anos.`);
    }
}

const p = new Pessoa("João", 20);
p.exibir();
