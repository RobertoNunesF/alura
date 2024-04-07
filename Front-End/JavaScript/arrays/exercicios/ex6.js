//Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90 ,100];

const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

console.log(soma);