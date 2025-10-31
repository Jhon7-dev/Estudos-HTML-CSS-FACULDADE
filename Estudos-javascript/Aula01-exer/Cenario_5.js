// Cenário 5 – Funções e Retorno


function imprimirSoma(a, b) {
  console.log(a + b);
}
imprimirSoma(2, 3);


function soma(a, b = 0) {
  return a + b;
}
console.log(soma(2, 3));


const multiplicar = function (a, b) {
  return a * b;
};
console.log(multiplicar(2, 3));

// Arrow Function
const dividir = (a, b) => a / b;
console.log(dividir(10, 2));


// JS permite várias formas de declarar funções.
// Arrow Functions são mais curtas e herdam o this do contexto.
