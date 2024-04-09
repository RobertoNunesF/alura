const estudante = {
    nome: 'Roberto Ferreira',
    idade: 26,
    cpf: '044.962.600-85',
    turma: 'JavaScript'
};

function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));