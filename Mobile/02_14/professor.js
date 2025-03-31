import Pessoa from "./pessoa.js";

class Professor extends Pessoa {

    constructor(nome, idade, disciplina) {
        super(nome, idade);
        this.disciplina = disciplina;
    }

    exibirInfo () {
        return `${super.exibirInfo()}, Disciplina: ${this.disciplina}`
    }

    darAula () {
        return `${this.nome} está dando aula de ${this.disciplina}`
    }

}

export default Professor;