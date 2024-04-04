const notas = [10, 8.5, 5, 6.5, 8, 7.5];

let somaNotas = 0;

for (const nota of notas) {
    somaNotas = somaNotas + nota;
}

console.log(`A média das notas é: ${(somaNotas/notas.length).toFixed(2)}`);