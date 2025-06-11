class ContaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    }

    public obterSaldo():void {
        return console.log(this.saldo);
    }
    public depositar(valor:number): void {
        if(valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado!`);
        }
        else {
            console.log('Valor de depósito inválido');
        }
    }

    public sacar(valor: number):void {
        if(valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado!`)
        }
        else {
            console.log('Saldo insuficiente!');
        }
    }
}

const minhaConta = new ContaBancaria(0);

minhaConta.depositar(5000);
console.log('--------------------------');

minhaConta.sacar(10);

minhaConta.obterSaldo();