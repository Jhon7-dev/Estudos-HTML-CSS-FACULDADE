// Cenário 4 – Booleanos e Lógica

let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

 
console.log(!!1);
console.log(!!0); 
console.log(!!''); 
console.log(!!'texto');


console.log(!![]);
console.log(!!{});
console.log(!!null); 
console.log(!!NaN); 
console.log(!!undefined); 


let nome = '';
console.log(nome || 'Desconhecido');


// JS faz coerção automática de tipos.
// !! converte para booleano e || define valores padrão.
