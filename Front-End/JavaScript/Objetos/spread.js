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
    },
    {
        rua: 'XV de Novembro',
        numero: '547',
        complemento: null,
    }]
};

function exibirTelefones(telefone1, telefone2) {
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
};

// exibirTelefones(estudante.telefones[0],estudante.telefones[1]);
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0],
};

console.log(dadosEnvio);