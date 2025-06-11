import { Pessoa, Endereco } from "./pessoa";

class Cliente implements Pessoa, Endereco {

    nome: string;
    idade: number;
    rua: string;
    cep: string;
    cidade: string;

    constructor(nome: string, idade: number, rua: string, cep: string, cidade: string) {
        this.nome = nome;
        this.idade = idade;
        this.rua = rua;
        this.cep = cep;
        this.cidade = cidade;
    }

    exibirDados(): void {
        console.log(`Nome: ${this.nome}, Idade: ${this.idade}, Cidade: ${this.cidade}, CEP: ${this.cep}, Rua: ${this.rua}`)
    }
}

const cliente1 = new Cliente('João', 17, 'Rua do Outono', '02541824', 'São Paulo');
const cliente2 = new Cliente('Joana', 71, 'Rua do Verão', '02500444', 'Paulo São');

cliente1.exibirDados();
cliente2.exibirDados();