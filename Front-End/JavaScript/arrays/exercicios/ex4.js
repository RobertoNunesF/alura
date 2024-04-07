//Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const numeros = [1, 2, 3,4, 5, 6, 7, 8, 9, 10];

function numerosPares (numeros) {
    return numeros.filter(numero => numero % 2 == 0);
};

console.log(numerosPares(numeros));