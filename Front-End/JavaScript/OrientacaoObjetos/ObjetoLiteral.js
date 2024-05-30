const user = {
    nome: "Roberto",
    email: "rrobertonunesferreira@gmail.com",
    nascimento: "21/09/1997",
    role: "estudante",
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome);
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso (){
        console.log('Curso criado!');
    }
}

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();