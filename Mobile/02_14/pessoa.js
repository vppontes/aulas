class Pessoa {
    // função construtora
    constructor (nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    exibirInfo () {
        return `Nome: ${this.nome}, Idade: ${this.idade}`
    }
}

export default Pessoa;