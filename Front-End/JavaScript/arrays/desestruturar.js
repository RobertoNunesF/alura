const estudantes = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [estudantes, medias];

function exibeNomeENota(estudante) {
    if (lista[0].includes(estudante)) {
        const [estudantes,medias] = lista;
        const indice = estudantes.indexOf(estudante);
        const mediaAluno = medias[indice];
        console.log(`${estudante} tem a média: ${mediaAluno}`);
    } else{
        console.log(`Estudante não existe na lista`);
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vini');