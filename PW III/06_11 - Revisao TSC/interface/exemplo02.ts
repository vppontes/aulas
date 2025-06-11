interface Carro{
    marca: string,
    modelo: string,
    ano?: number
}

const carro1: Carro = {
    marca: 'Toyota',
    modelo: 'Corolla',
}

console.log(carro1.modelo);