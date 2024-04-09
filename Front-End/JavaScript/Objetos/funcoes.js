const estudante = {
    nome: 'Roberto Ferreira',
    idade: 26,
    cpf: '044.962.600-85',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['(53)98125-9750', '(53)3226-3957'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >=mediaBase ? true : false
    }
};

console.log(estudante.estaAprovado(7));
