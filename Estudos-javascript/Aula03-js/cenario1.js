
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
  descricao() {
    return `${this.marca} ${this.modelo} ${this.ano}`;
  }
};

console.log(carro.descricao()); 


carro.ano = 2025;
console.log(carro.descricao());