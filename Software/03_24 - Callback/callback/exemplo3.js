function calculadora(a, b, operacao) {

 return operacao(a, b);

}

function somar(a, b) {
 return a + b;
}
function subtrair(a, b) {
 return a - b;
}
function multiplicar(a, b) {
 return a * b;
}
function dividir(a, b) {
 return a / b;
}

console.log(dividir(2,3));