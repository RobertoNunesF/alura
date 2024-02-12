alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 4;
console.log(numeroSecreto);

let chute; 


// enquanto o chute não foi igual ao n.s.
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 10');

    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto}`);
    } else {
        if (chute > numeroSecreto ) {
            alert(`O número secreto é menor que o ${chute}`);
        } else {
            alert(`O número secreto é maior que o ${chute}`);
        }
    }

}
