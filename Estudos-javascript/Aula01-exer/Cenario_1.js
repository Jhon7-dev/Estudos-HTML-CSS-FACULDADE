// Cenário 1 – Variáveis e Tipagem Dinâmica

const a = 0;
var x;
let y;
z = 1;

console.log(a); 
console.log(x);
console.log(y); 
console.log(z); 


let t = 'a';
console.log(typeof t); // string
t = 1;
console.log(typeof t); // number
t = 1.12;
console.log(typeof t); // number

// Testando divisão por zero
console.log(3 / 0);
console.log(0 / 0); 


if (true) {
  var testeVar = 'var é global';
  let testeLet = 'let é de bloco';
  const testeConst = 'const é constante';
  console.log(testeLet);
  console.log(testeConst);
}
console.log(testeVar);

// O JavaScript é fracamente tipado e permite mudanças de tipo.
// var tem escopo global, let é de bloco e const é constante.
