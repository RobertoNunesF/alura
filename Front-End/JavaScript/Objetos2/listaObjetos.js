const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["11 222334455", "22 333445566"],
};

cliente.enderecos = [
    {
        rua: "R. Joseph Climber",
        numro: 1337,
        apartamento: true,
        complemento: "ap 934",
    },
];

cliente.enderecos.push({
    rua: "R. Joseph Ladder",
    numero: 404,
    apartamento: false,
});

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true,
);

console.log(listaApenasApartamentos);