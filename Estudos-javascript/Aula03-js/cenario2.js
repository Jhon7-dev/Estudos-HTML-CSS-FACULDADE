const empresa = {
  endereco: {
    rua: "Av. Brasil",
    numero: 123,
    cidade: "São Paulo"
  },
  funcionarios: [
    { nome: "Ana", cargo: "Gerente" },
    { nome: "Pedro", cargo: "Desenvolvedor" }
  ]
};


console.log("Rua:", empresa.endereco.rua); 
console.log("Primeiro funcionário:", empresa.funcionarios[0].nome); 
