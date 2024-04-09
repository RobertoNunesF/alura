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

const chavesObjeto = Object.keys(estudante);

console.log(chavesObjeto);

if (!chavesObjeto.includes('enderecos')) {
    console.error('É necessário ter um endereço cadastrado')
}