🎯 Objetivo
Aplicar, na prática, os conceitos de CSS Fundamentos, explorando seletores, pseudo-classes, pseudo-elementos, modelo de caixas e técnicas de layout (float, position, inline-block e sticky/fixed).

Os alunos deverão criar quatro páginas HTML (com CSS externo), cada uma ilustrando um conceito diferente estudado em aula.

✅ Instruções Gerais
Crie uma pasta chamada ac2_css/

Dentro dela, crie 4 subpáginas (ex1 a ex4) e uma pasta css/ para os estilos externos.

Cada HTML deve conter:

Estrutura semântica (header, section, footer)

Comentários no código explicando o uso de cada propriedade

Layout visual coerente e harmonioso

Footer padronizado com:

<footer>
  <p>Desenvolvido por: [SEU NOME] | Linguagens de Programação - FACENS | &copy; 2025</p>
</footer>

🧱 Exercício 1 – Seletores e Hierarquia Visual
📂 Arquivos: ex1_seletores.html + style1.css

Crie uma página demonstrando o uso dos principais seletores CSS (slides 27–30):

Conteúdo mínimo:
Título <h1> e subtítulo <h2>

Uma lista <ul> com 5 itens

Uma <div> com parágrafos e classes diferentes

No CSS:
Aplique seletor universal, de elemento, de classe, de ID e combinado (div p, h1, h2)

Diferencie cores, tamanhos e alinhamentos

Mostre em comentários o porquê da prioridade (cascade)

💬 Dica: Demonstre visualmente a diferença entre #id, .classe e *.

🧩 Exercício 2 – Pseudo-Classes e Pseudo-Elementos
📂 Arquivos: ex2_pseudo.html + style2.css

Utilize os conceitos dos slides 31–34:

Conteúdo mínimo:
2 links com efeitos :hover, :active, :visited

Uma lista <ul> com pseudo-classes :first-child, :nth-child(odd/even)

Um parágrafo estilizado com ::first-letter e ::first-line

Inclua um campo <input> com pseudo-classes :focus, :valid, :invalid

💬 Dica: Use cores diferentes e uma tipografia agradável.

Exemplo: Quando o usuário passa o mouse sobre o link, o fundo muda e o cursor se transforma em pointer.


🧮 Exercício 3 – Layout e Modelo de Caixas
📂 Arquivos: ex3_layout.html + style3.css

Aplicando slides 35–41 (modelo de caixas, inline, block, inline-block):

Estrutura:
Um cabeçalho <header>

Uma seção <section> com 3 caixas <div> lado a lado

Cada caixa deve ter:

padding, margin, border e width

Uma versão com display: inline-block;

Outra demonstrando float: left; e clear: both;

Mostre como a propriedade box-sizing pode alterar o cálculo do espaço total.

💬 Dica: Use cores contrastantes e explique no código como margin e padding influenciam o layout.


📐 Exercício 4 – Position, Float e Sticky
📂 Arquivos: ex4_position.html + style4.css

Aplicando slides 42 até o final (posicionamentos e flutuação):

Estrutura:
Um menu fixo no topo (position: fixed)

Uma área principal com três caixas:

Uma com position: relative; deslocada 20px da esquerda

Uma com position: absolute; sobreposta

Uma com position: sticky; que “gruda” ao rolar a página

Inclua exemplos de float à esquerda e direita (ex.: imagem com texto ao redor)

💬 Dica: adicione comentários explicando o comportamento de cada tipo de posicionamento.

