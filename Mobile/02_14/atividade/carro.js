class Carro {

    constructor(marca, modelo, ano, tipo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.tipo = tipo;
    }

    exibirInfo () {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Tipo: ${this.tipo}`
    }

    somCarro () {
        return `O carro ${this.modelo} da ${this.marca} faz vrum vrum !`
    }

}

export default Carro;