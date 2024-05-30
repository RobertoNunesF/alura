import User from "./User.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

const novoUser = new User ('Mariana', 'm@m.com', '2021-01-01');

console.log(novoUser.exibirInfos());

const novoAdmin = new Admin ('Rodrigo', 'r@r.com', '2022-03-01');

console.log(novoAdmin.nome);

const novoDocente = new Docente('Guilherme', 'g@g.com', '2020-09-21');

console.log(novoDocente.exibirInfos());