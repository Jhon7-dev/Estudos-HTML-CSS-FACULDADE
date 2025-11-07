// Cenario2_Desestruturacao.js
// Objetivo: demonstrar desestruturação (objects e arrays)
// Instruções: execute com `node Cenario2_Desestruturacao.js`

// 1) Desestruturação de objetos
const pessoa = { nome: "Ana", idade: 30 };

// A sintaxe { nome, idade } extrai as propriedades 'nome' e 'idade' do objeto 'pessoa'
// e cria variáveis locais com os mesmos nomes.
// O console exibirá: "Ana" e 30
const { nome, idade } = pessoa;
console.log("nome ->", nome);   // "Ana"
console.log("idade ->", idade); // 30

// Também é possível renomear as variáveis durante a desestruturação:
// extrai 'nome' para a variável 'nomePessoa'
const { nome: nomePessoa, idade: anos } = pessoa;
console.log("nomePessoa ->", nomePessoa); // "Ana"
console.log("anos ->", anos);             // 30

// 2) Desestruturação de arrays
const numeros = [10, 20, 30];

// A sintaxe [primeiro, segundo] atribui os valores do array às variáveis correspondentes.
// O console exibirá: 10 e 20
const [primeiro, segundo] = numeros;
console.log("primeiro ->", primeiro); // 10
console.log("segundo ->", segundo);   // 20

// Você pode pular elementos usando vírgulas. Aqui pegamos o terceiro elemento somente.
const [, , terceiro] = numeros;
console.log("terceiro ->", terceiro); // 30

// 3) Desestruturação com valores padrão (quando a propriedade/índice não existe)
const produto = { nome: "Caneca" };
// 'preco' não existe em 'produto', então usamos um valor padrão (15.0)
const { nome: produtoNome, preco = 15.0 } = produto;
console.log("produtoNome ->", produtoNome); // "Caneca"
console.log("preco ->", preco);             // 15.0 (valor padrão)

// 4) Desestruturação aninhada (extraindo propriedade de objeto aninhado)
const usuario = {
  id: 1,
  perfil: {
    apelido: "jhonny",
    linguagem: "JavaScript"
  }
};

// Extraindo 'apelido' diretamente de usuario.perfil
const { perfil: { apelido } } = usuario;
console.log("apelido ->", apelido); // "dev_joao"

/*
Conclusão sugerida:
A desestruturação simplifica o acesso aos valores e evita repetições de código.
É uma das práticas mais modernas e limpas do JavaScript.
*/
