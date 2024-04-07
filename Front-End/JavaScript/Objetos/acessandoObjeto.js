const estudante = {
    nome: 'Roberto Ferreira',
    idade: 26,
    cpf: '044.962.600-85',
    turma: 'JavaScript'
};

console.log(estudante.nome);
console.log(`O nome do estudante é ${estudante.nome}`);
console.log(`Os 3 primeiros dígitos do cpf são ${estudante.cpf.substring(0,3)}`);