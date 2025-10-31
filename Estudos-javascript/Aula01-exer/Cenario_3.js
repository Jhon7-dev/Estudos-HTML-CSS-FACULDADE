// Cenário 3 – Strings e Métodos

const nome = 'João Victor';

console.log(nome.charAt(4));     
console.log(nome.charCodeAt(4)); 
console.log(nome.indexOf('V'));  

console.log(nome.substring(0, 4)); 
console.log(nome.replace('Victor', 'Dev'));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.endsWith('Victor')); 
console.log(nome.length); 

console.log(nome.split(' '));
console.log('Olá '.concat(nome, '!')); 

const idade = 21;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);


// Strings em JS são objetos com muitos métodos úteis.
// Template Strings facilitam a interpolação de variáveis.
