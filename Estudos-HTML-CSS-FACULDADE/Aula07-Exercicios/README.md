# 🧠 Exercícios de HTML e CSS – Fundamentos e Prática

Este repositório contém uma série de **4 exercícios práticos** desenvolvidos para consolidar os conceitos fundamentais de **HTML e CSS**.  
Cada exercício aborda tópicos essenciais — desde estrutura e estilização básica até seletores, pseudo-classes e layout dinâmico.

---

## 📘 Exercício 1 – Estrutura e Estilização Base

### 🎯 Objetivo
Criar a estrutura HTML básica e aplicar estilos iniciais usando **CSS externo**.

### 🧩 Instruções
**HTML**
- Criar um documento HTML com:
  - Um cabeçalho (`<header>`)
  - Um corpo principal (`<main>`) com **dois parágrafos**
  - Um rodapé (`<footer>`) padronizado

**CSS**
- Alterar a **cor de fundo do cabeçalho**
- Centralizar o **título principal**
- Mudar a **cor do texto dos parágrafos**
- Utilizar **diferentes unidades de medida**:
  - `px`, `%`, `em`, `rem` (para tamanhos de fonte e larguras)

### 💡 Conceitos praticados
- Estrutura básica do HTML
- Ligação de CSS externo
- Hierarquia de elementos e semântica
- Unidades de medida relativas e absolutas

---

## 🎨 Exercício 2 – Prática com Seletores

### 🎯 Objetivo
Aplicar estilos visuais usando **diversos tipos de seletores CSS**.

### 🧩 Instruções
**HTML**
- Criar uma página contendo **pelo menos 5 elementos distintos**, como:
  - `<h1>`, `<p>`, `<ul>`, `<div>`, `<section>`, etc.

**CSS**
- Aplicar estilos diferentes usando:
  - Seletor **universal**: `*`
  - Seletor de **elemento**: `p`, `h1`
  - Seletor de **classe**: `.minha-classe`
  - Seletor de **ID**: `#meu-id`
  - Seletor **descendente**: `div p`
  - **Agrupamento de seletores**: `h1, h2`
- Incluir **comentários** no código explicando a função e a diferença entre cada seletor.

### 💡 Conceitos praticados
- Hierarquia e especificidade de seletores
- Organização de código CSS
- Importância de comentários explicativos

---

## 🧩 Exercício 3 – Pseudo-classes e Pseudo-elementos

### 🎯 Objetivo
Estilizar elementos com base em **estados** e **partes específicas** dos elementos.

### 🧩 Instruções
**HTML**
- Incluir:
  - Pelo menos **um link** (`<a>`)
  - Uma **lista não ordenada** (`<ul>` com `<li>`)

**CSS**
- **Links**: usar pseudo-classes `:link`, `:hover`, `:visited`
- **Listas**: aplicar pseudo-classes estruturais:
  - `:first-child`
  - `:nth-child()`
- **Parágrafos**: aplicar pseudo-elementos:
  - `::first-letter` → estiliza a **primeira letra**
  - `::first-line` → estiliza a **primeira linha**
- Incluir **comentários explicando** a função de cada pseudo-classe e pseudo-elemento.

### 💡 Conceitos praticados
- Pseudo-classes e pseudo-elementos
- Interatividade visual com hover
- Seleção de partes específicas de um elemento

---

## 🧱 Exercício 4 – Layout Dinâmico e Funções CSS

### 🎯 Objetivo
Criar um **layout simples e dinâmico**, utilizando **posicionamento**, **funções CSS** e **propriedades shorthand**.

### 🧩 Instruções
**Layout**
- Criar um `<header>` fixo no topo (`position: fixed`)
- Adicionar **duas `<div>` lado a lado**, com 50% da largura cada
- Criar uma `<div>` extra com largura calculada usando:
  ```css
  width: calc(100% - 100px);




