interface Veiculo {
    imprimirDetalhes(): void;
}

class Carro implements Veiculo {

    marca: string;
    modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    imprimirDetalhes(): void {
        console.log(`Carro: ${this.modelo} - Marca: ${this.marca}`)
    }
}

class Bicicleta implements Veiculo {
    marca: string;
    tipo: string;

    constructor(marca: string, tipo: string) {
        this.marca = marca;
        this.tipo = tipo;
    }

    imprimirDetalhes(): void {
        console.log(`Bicicleta: ${this.marca} - ${this.tipo}\n`);
    }
}

const carro = new Carro('Ford', 'Fusion');
const bicicleta = new Bicicleta('Caloi', 'Wheeling');

// carro.imprimirDetalhes();
// bicicleta.imprimirDetalhes();

const veiculos: Veiculo[] = [carro, bicicleta];

veiculos.forEach(veiculo => veiculo.imprimirDetalhes());