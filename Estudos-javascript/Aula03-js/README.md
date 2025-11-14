🧩 Cenário 1️⃣ – Notação Ponto em Objetos Simples
📘 Tema: Acesso direto a propriedades e métodos de objetos.
🎯 Objetivo: Compreender como acessar e modificar informações dentro de um objeto.

🧩 Tarefa:
Crie um objeto carro com propriedades marca, modelo, ano e um método descricao() que retorne uma string com todos os dados.
Em seguida, altere a propriedade ano e exiba o resultado atualizado.

💡 Dica: Observe no console como o valor é atualizado dinamicamente após o uso da notação ponto.

🧩 Cenário 2️⃣ – Notação Ponto em Objetos Aninhados e Arrays
📘 Tema: Acesso a estruturas internas e listas de objetos.
🎯 Objetivo: Trabalhar com propriedades aninhadas e arrays de objetos.

🧩 Tarefa:
Crie um objeto empresa com:

propriedade endereco contendo rua, numero, cidade;

propriedade funcionarios sendo um array de objetos { nome, cargo }.

Exiba no console:

O endereço completo (empresa.endereco.rua);

O nome do primeiro funcionário (empresa.funcionarios[0].nome).

🧩 Cenário 3️⃣ – Desestruturação de Objetos
📘 Tema: Simplificando acesso a propriedades.
🎯 Objetivo: Reduzir repetição no código usando desestruturação.

🧩 Tarefa:
Crie um objeto usuario = { nome, idade, email }.
Utilize desestruturação para extrair as variáveis nome e email.
Mostre seus valores no console e explique (em comentário) como isso substitui o uso repetido de usuario.nome.

💡 Dica: Compare no código o acesso usuario.email e a variável extraída { email }.

🧩 Cenário 4️⃣ – Desestruturação de Arrays
📘 Tema: Acesso direto a posições específicas de listas.
🎯 Objetivo: Demonstrar extração posicional simplificada.

🧩 Tarefa:
Crie um array numeros = [10, 20, 30, 40, 50].
Use desestruturação para capturar os dois primeiros valores.
Exiba no console e realize uma operação de soma entre eles.

– Cenário 5️⃣ Funções Nomeadas, Anônimas e Arrow
📘 Tema: Diferenças entre tipos de funções.
🎯 Objetivo: Comparar e executar três formas de declaração de função.

🧩 Tarefa:
Implemente as três formas para uma mesma operação (por exemplo, multiplicação):

function multiplicar(a,b) { return a * b; }
const multiplicaAnonima = function(a,b) { return a * b; }
const multiplicaArrow = (a,b) => a * b;
Execute todas e exiba os resultados no console.
Adicione comentários explicando qual forma é mais concisa e qual é mais legível.

🧩 Cenário 6️⃣ – Função Construtora
📘 Tema: Criação de objetos personalizados via função.
🎯 Objetivo: Demonstrar o uso de this e new para gerar instâncias.

🧩 Tarefa:
Crie uma função Pessoa(nome, idade) que armazene as propriedades e contenha um método apresentar() que retorne:
Olá, eu sou <nome> e tenho <idade> anos.

Crie duas instâncias (pessoa1, pessoa2) e chame o método para ambas.

🧩 Cenário 7️⃣ – Mini Sistema Integrado (Desafio Final)
📘 Tema: Integração de objetos, desestruturação e funções.
🎯 Objetivo: Consolidar todos os conceitos estudados em um pequeno sistema funcional.

🧩 Tarefa:
Crie um sistema Livraria que contenha:

Um array de livros (titulo, autor, paginas);

Um método que liste todos os títulos;

Uma função arrow que calcule a média de páginas;

Uma função construtora para criar novos livros.
Utilize desestruturação para exibir detalhes do primeiro livro.

💡 Dica: Planeje o código passo a passo, começando pelos dados e depois os métodos.