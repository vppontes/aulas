interface Funcionario {
    nome: string,
    salario: number,
}

interface Gerente extends Funcionario {
    setor: string
}

const gerente1: Gerente = {
    nome: 'João',
    salario: 13000,
    setor: 'Frente de loja'
}

console.log(gerente1.setor);