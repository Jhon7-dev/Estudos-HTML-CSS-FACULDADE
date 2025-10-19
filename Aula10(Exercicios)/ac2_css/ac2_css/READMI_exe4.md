# 🏔️ EXERCÍCIO 4: Landing Page ECOTOUR - Posicionamento CSS em Ação

Este projeto consiste em uma Landing Page de demonstração para uma agência de ecoturismo, cujo principal objetivo é consolidar o aprendizado e a aplicação avançada das propriedades de posicionamento CSS: `position` (Fixed, Relative, Absolute, Sticky) e `float`.

O design simula um layout moderno e envolvente, onde cada técnica de CSS serve a uma função específica de experiência do usuário e diagramação de conteúdo.

## 🎯 Conceitos Chave Demonstrados

A arquitetura CSS do projeto é baseada na aplicação estratégica das seguintes propriedades:

| Propriedade CSS | Aplicação no Projeto | Detalhe Técnico |
| :--- | :--- | :--- |
| **`position: fixed;`** | **Menu de Navegação (.menu-fixo)** | O menu permanece fixo no topo da janela (`viewport`), garantindo que a navegação esteja sempre acessível, independentemente da rolagem. |
| **`position: relative;`** | **Container de Posicionamento (.posicionamento-container)** | Define um novo contexto de posicionamento para seus elementos filhos, servindo como referência para a caixa `absolute`. |
| **`position: absolute;`** | **Selo de Oferta/Destaque (.absolute-demo)** | O selo "OFERTA!" é retirado do fluxo normal e sobreposto à caixa relativa, ideal para selos, tooltips ou elementos flutuantes controlados. |
| **`position: sticky;`** | **Barra de CTA Lateral (.sticky-side-bar)** | A barra lateral de "Reservar Agora" se comporta como `relative` até atingir o topo da viewport (`top: 90px`), onde "gruda" e se comporta como `fixed` até o fim de seu contêiner pai. |
| **`float: left;`** | **Imagem de Segurança (.float-left-img)** | Flutua a imagem para a esquerda, permitindo que o bloco de texto ao lado a envolva, criando um layout de coluna de revista. |
| **`float: right;`** | **Barra Sticky Lateral (.sticky-side-bar) e Imagem de Compromisso (.float-right-img)** | Utilizado para alinhar o Call-to-Action lateral e a imagem do guia à direita, com o texto fluindo à esquerda. |
| **`clear: both;`** | **Contêiner de Limpeza (.clear-float)** | Usado para garantir que o elemento subsequente comece abaixo de todos os elementos flutuantes anteriores, mantendo a integridade do layout. |
