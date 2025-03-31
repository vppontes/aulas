import Carro from "./carro.js";

class CarroUsado extends Carro {

    constructor(marca, modelo, ano, tipo, dono, anoCompra) {
        super(marca, modelo, ano, tipo)
        this.dono = dono;
        this.anoCompra = anoCompra;
    }

    exibirInfo () {
        return `${super.exibirInfo()}, Ano de compra: ${this.anoCompra}, Dono: ${this.dono}`;
    }

}

export default CarroUsado;