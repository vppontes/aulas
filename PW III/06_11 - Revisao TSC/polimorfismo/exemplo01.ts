class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    calcularDesconto():number {
        throw new Error('Método é obrigatório calcularDesconto()');
    }
}

class ProdutoEletronico extends Produto {
    garantiaMeses: number;

    constructor(nome: string, preco: number, garantiaMeses: number) {
        super(nome, preco);
        this.garantiaMeses = garantiaMeses;
    }

    calcularDesconto(): number {
        return this.preco * 0.1;
    }
}

class produtoAlimenticio extends Produto {
    validade: number;

    constructor(nome: string, preco: number, validade: number) {
        super(nome, preco);
        this.validade = validade;
    }
    calcularDesconto(): number {
        return this.preco * 0.5;
    }
}

function aplicarDesconto(produto: Produto): void{
    const desconto = produto.calcularDesconto();
    const precoComDesconto = produto.preco - desconto;

    console.log(`Preço com desconto ${produto.nome}: R$${precoComDesconto.toFixed(2)}`);
}

const netbook = new ProdutoEletronico('LG', 1300, 14);
const fruta = new produtoAlimenticio('Maxixe', 6.19, 1);

aplicarDesconto(netbook);
aplicarDesconto(fruta);