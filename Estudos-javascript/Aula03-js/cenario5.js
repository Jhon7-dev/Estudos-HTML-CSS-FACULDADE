function multiplicar(a, b) {
  return a * b;
}

const multiplicaAnonima = function(a, b) {
  return a * b;
};

const multiplicaArrow = (a, b) => a * b;

console.log("multiplicar:", multiplicar(3, 4));         
console.log("anonima:", multiplicaAnonima(3, 4));      
console.log("arrow:", multiplicaArrow(3, 4));          
