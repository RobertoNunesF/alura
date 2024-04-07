//Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const numeros = [1, 2, 3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function numerosFiltrados (numeros) {
    return numeros.filter(numero => numero % 3 ==0 && numero > 5);
};

console.log(numerosFiltrados(numeros));