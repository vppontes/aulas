const assert = require('assert');
const Calculadora = require('../calculadora');

describe('Calculadora', function () {
    
    let calc;

    this.beforeEach(function () {
        calc = new Calculadora;
    });

    it('Deve somar dois números corretamente', () => {
        const resultado = calc.somar(5, 3);
        assert.strictEqual(resultado, 8);
    });

    it('Deve subtrair dois números corretamente', () => {
        const resultado = calc.subtrair(5, 3);
        assert.strictEqual(resultado, 2);
    });

    it('Deve multiplicar dois números corretamente', () => {
        const resultado = calc.multiplicar(5, 3);
        assert.strictEqual(resultado, 15);
    });

    it('Deve dividir dois números corretamente', () => {
        const resultado = calc.dividir(15, 3);
        assert.strictEqual(resultado, 5);
    });

    it('Deve lançar um erro ao tentar dividir por zero', function () {
        assert.throws( () => calc.dividir(10, 0), /Divisão por zero não é permitida!/ );
    });

})