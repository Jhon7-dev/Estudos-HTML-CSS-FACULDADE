
// Objetivo: demonstrar acesso a propriedades e métodos de objetos e arrays


// 1) Acesso direto a propriedades de um objeto
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020
};

// Aqui acessamos a propriedade 'marca' do objeto 'carro' usando notação ponto.
// O console exibirá: "Toyota"
console.log("carro.marca ->", carro.marca); // "Toyota"

// Acessamos também a propriedade 'ano' do mesmo objeto.
// O console exibirá: 2020
console.log("carro.ano ->", carro.ano); // 2020

// 2) Chamando métodos de um objeto
const usuario = {
  nome: "João",
  // 'saudacao' é um método (função) dentro do objeto.
  saudacao: function() {
    // 'this' refere-se ao próprio objeto 'usuario', portanto this.nome = "João"
    return `Olá, ${this.nome}!`;
  }
};

// Chamando o método saudacao() usando notação ponto.
// O console exibirá: "Olá, João!"
console.log("usuario.saudacao() ->", usuario.saudacao()); // "Olá, João!"

// 3) Propriedades aninhadas (objetos dentro de objetos)
const empresa = {
  nome: "Tech Ltda",
  endereco: {
    rua: "Av. Central",
    numero: 123
  }
};

// Acessando uma propriedade aninhada: primeiro 'endereco', depois 'rua'.
// O console exibirá: "Av. Central"
console.log("empresa.endereco.rua ->", empresa.endereco.rua); // "Av. Central"

// 4) Arrays de objetos
const livros = [
  { titulo: "JS Básico", autor: "Maria" },
  { titulo: "JS Avançado", autor: "Carlos" }
];

// Acessando o primeiro elemento do array (índice 0) e sua propriedade 'titulo'.
// O console exibirá: "JS Básico"
console.log("livros[0].titulo ->", livros[0].titulo); // "JS Básico"

// Acessando o segundo elemento e sua propriedade 'autor'.
// O console exibirá: "Carlos"
console.log("livros[1].autor ->", livros[1].autor); // "Carlos"

/*
Conclusão sugerida:
A notação ponto permite acessar e manipular facilmente dados em objetos e arrays.
É uma das bases da manipulação de estruturas em JavaScript.
*/
