//Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [7, 26, 26, 36, 38, 56, 59];

function somaValores (valores) {
    const soma = valores.reduce ((acumulador, valorAtual) => acumulador + valorAtual, 0);

    return soma;
};

console.log(somaValores(valores));