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

for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto= `a chave ${chave} tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}