//Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
const array3 = [7, 8, 9];

function juntandoArrays (...arrays) {
    return [].concat(...arrays);
};

const arrayTotal = juntandoArrays(array1, array2, array3);

console.log(arrayTotal);