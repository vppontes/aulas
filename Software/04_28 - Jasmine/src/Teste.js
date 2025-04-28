const aluno = ( nota, media ) => {

    nota = 0;
    media = 4;

    const resultado = nota >= media ? "Aprovado" : "Reprovado";

    return resultado;

};

//@*****@*****@*****@*****@*****@*****@//

function comparacao() {
    var a = 40;
    var b = 30;
    var situacao;

    if (a > b) {
        return situacao = true;
    } else {
        return situacao =  false;
    }
};

//@*****@*****@*****@*****@*****@*****@//

class Pessoa {
    
    constructor(nome, sobrenome, idade, corCabelo) {

        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.corCabelo = corCabelo;

        this.nome = () => {
            return nome + " " + sobrenome;
        };

        this.nome_idade = () => {
            return nome + " " + sobrenome + " tem idade igual a " + idade;
        };

        this.nome_corCabelo = () => {
            return nome + " " + sobrenome + " tem cabelo de cor " + corCabelo;
        };
    }
}