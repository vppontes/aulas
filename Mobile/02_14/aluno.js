import Pessoa from "./pessoa.js";

class Aluno extends Pessoa {

    constructor(nome, idade, curso) {
        super(nome, idade);
        this.curso = curso;
    }

    exibirInfo () {
        return `${super.exibirInfo()}, Curso: ${this.curso}`
    }

}

export default Aluno