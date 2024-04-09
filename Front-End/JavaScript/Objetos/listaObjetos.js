const estudante = {
    nome: 'Roberto Ferreira',
    idade: 26,
    cpf: '044.962.600-85',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['(53)98125-9750', '(53)3226-3957'],
    enderecos: [{
        rua: 'Caçapava do Sul',
        numero: '2117',
        complemento: 'sobrado'
    }]
};

estudante.enderecos.push({
    rua: 'XV de Novembro',
    numero: '547',
    complemento: ''
});

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[0]);
// console.log(estudante.enderecos[1]);

const listaEnderecosComComplemento = estudante.enderecos.filter((enderecos) => enderecos.complemento);

console.log(listaEnderecosComComplemento);