# 🛒 EXERCÍCIO 2: Loja CSS - Demonstração de Pseudo-Classes e Pseudo-Elementos

Este projeto consiste em uma página de loja fictícia minimalista, focada inteiramente em demonstrar o poder das **Pseudo-Classes** e **Pseudo-Elementos** do CSS para adicionar interatividade e estilo avançado sem a necessidade de JavaScript.

A página foi construída seguindo uma paleta de cores escura e moderna para destacar visualmente cada efeito aplicado.

## 🎯 Conceitos Chave Demonstrados

O objetivo principal deste exercício foi aplicar e consolidar o uso das seguintes propriedades CSS:

| Conceito CSS | Seletor Aplicado | Efeito Demonstração |
| :--- | :--- | :--- |
| **Interatividade** | `:hover` e `:active` | Efeitos de flutuação (`transform: translateY`) e sombra nos itens da lista (`.produto`) e nos links. |
| **Seleção Estrutural** | `:nth-child(odd/even)` | Alterna a posição e opacidade dos itens da lista de produtos, criando um design "escalonado". |
| **Estado de Links** | `:visited` | Altera sutilmente a cor dos links já visitados, melhorando a experiência do usuário. |
| **Foco do Usuário** | `:focus` | Ao clicar no campo de e-mail (`input`), o campo ganha uma borda colorida em destaque e uma sombra. |
| **Validação** | `:valid` e `:invalid` | O campo de e-mail exibe borda verde (`#3ad29f`) quando preenchido corretamente e vermelha (`#ff5c7c`) se estiver vazio (`required`) ou inválido. |
| **Estilo Textual** | `::first-letter` | Estiliza a primeira letra do parágrafo da promoção, dando-lhe um tamanho maior e a cor de destaque (`var(--accent)`). |
| **Estilo Textual** | `::first-line` | Estiliza a primeira linha do parágrafo da promoção com uma cor e peso de fonte diferentes. |

## 🛠️ Detalhes da Implementação

### 1. Lista de Produtos (`.produto`)
* Usa **Flexbox** para organizar os itens em linha.
* `transform: translateY()` em conjunto com `:nth-child(even)` e `:nth-child(odd)` cria um efeito de deslocamento vertical nos produtos.
* O efeito `:hover` faz o produto "flutuar" (`transform: translateY(-6px)`) e adiciona uma sombra intensa.

### 2. Seção de Promoção (`.promo`)
* O pseudo-elemento `::first-letter` utiliza `float: left` para criar o efeito de **letra capitular**, muito comum em artigos e blogs.

### 3. Formulário de Contato (`.contato`)
* O atributo `required` no campo `input` permite que as pseudo-classes **`:valid`** e **`:invalid`** sejam aplicadas automaticamente pelo CSS, reagindo ao estado de preenchimento do campo.

 