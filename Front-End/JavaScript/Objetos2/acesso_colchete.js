const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com",
};

console.log(`O nome do cliente é ${cliente["nome"]} e essa pessoa tem ${cliente["idade"]} anos`);

console.log(`Os três primeiros digitos do CPF são: ${cliente.cpf.substring(0, 3)}`);

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A ${chave} tem valor ${cliente[chave]}`);
});