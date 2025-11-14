function Livro(titulo, autor, paginas) {
  this.titulo = titulo;
  this.autor = autor;
  this.paginas = paginas;
}


const Livraria = {
  livros: [
    new Livro("O Alquimista", "Paulo Coelho", 197),
    new Livro("Clean Code", "Robert C. Martin", 464),
    new Livro("Eloquent JavaScript", "Marijn Haverbeke", 472)
  ],

  listarTitulos() {
  
    const titulos = this.livros.map(l => l.titulo);
    console.log("Títulos cadastrados:");
    titulos.forEach(t => console.log("-", t));
    return titulos;
  },

  mediaPaginas: () => {

    return (Livraria.livros.reduce((acc, l) => acc + l.paginas, 0) / Livraria.livros.length);
  },

  adicionarLivro(titulo, autor, paginas) {
    const novo = new Livro(titulo, autor, paginas);
    this.livros.push(novo);
    console.log(`Livro cadastrado: ${titulo} — ${autor} — ${paginas} páginas`);
  }
};


Livraria.adicionarLivro("JavaScript: The Good Parts", "Douglas Crockford", 176);


Livraria.listarTitulos();


console.log("Média de páginas:", Math.round(Livraria.mediaPaginas()), "páginas");


const [primeiroLivro] = Livraria.livros;
const { titulo: tituloPrimeiro, autor: autorPrimeiro, paginas: paginasPrimeiro } = primeiroLivro;
console.log("Detalhes do primeiro livro (desestruturação):");
console.log("Título:", tituloPrimeiro);
console.log("Autor:", autorPrimeiro);
console.log("Páginas:", paginasPrimeiro);
