export default function ehMaiorDeIdade (campo) {
    const dataDeNascimento = new Date(campo.value);
    if (!validadeIdade()) {
        campo.setCustomValidity('O usuário não é maior de idade');
    }
}

function validadeIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}