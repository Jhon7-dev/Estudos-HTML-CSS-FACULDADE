🧩 Atividade Prática – JavaScript: Notação Ponto e Desestruturação
🎯 Objetivo da Atividade

Aplicar na prática os conceitos apresentados até o slide 14 do material “2b – 02 JavaScript.pptx”, reproduzindo e interpretando os exemplos sobre:

Notação Ponto: acesso e manipulação de propriedades de objetos e arrays;

Desestruturação: extração simplificada de valores de objetos e arrays.

🧱 Cenário 1️⃣ – Notação Ponto
📘 Tema:

Acesso a propriedades e métodos de objetos e arrays.

📈 Objetivo:

Demonstrar como acessar e exibir informações dentro de objetos e listas.

🧠 Conteúdo demonstrado:

Acesso direto: carro.marca

Métodos dentro de objetos: usuario.saudacao()

Propriedades aninhadas: empresa.endereco.rua

Arrays de objetos: livros[0].titulo

// A notação ponto permite acessar e manipular facilmente dados em objetos e arrays.
// É uma das bases da manipulação de estruturas em JavaScript.

🧩 Cenário 2️⃣ – Desestruturação de Objetos e Arrays
📘 Tema:

Extraindo dados de forma simplificada com desestruturação.

📈 Objetivo:

Reduzir repetições e tornar o código mais legível.

🧠 Conteúdo demonstrado:

Desestruturação de objetos: { nome, idade }

Renomeação de variáveis: { nome: nomePessoa }

Desestruturação de arrays: [primeiro, segundo]

Valores padrão: { preco = 15.0 }

Desestruturação aninhada: { perfil: { apelido } }

🧾 Conclusão:
// A desestruturação simplifica o acesso aos valores e evita repetições de código.
// É uma das práticas mais modernas e limpas do JavaScript.

🧠 Resumo do Conteúdo dos Slides (1–14)
📘 Slides 1–8 – Notação Ponto

A notação ponto (.) é usada para acessar propriedades e métodos de objetos e arrays.

Exemplo simples:
carro.marca
usuario.saudacao()
empresa.endereco.rua
livros[0].titulo
Permite navegar dentro de estruturas aninhadas (objetos dentro de objetos ou arrays).

É uma das bases da manipulação de dados no JavaScript.

👉 Conceito-chave:

A notação ponto é o modo mais direto e legível de acessar informações em objetos e listas.
🧩 Slides 9–14 – Desestruturação

A desestruturação (destructuring) é uma forma moderna e simplificada de extrair valores de objetos e arrays.

Exemplo com objeto:

const { nome, idade } = pessoa;
Exemplo com array:

const [primeiro, segundo] = numeros;