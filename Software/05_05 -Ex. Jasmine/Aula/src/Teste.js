//src é onde fica o código fonte

function inteiro(inteiro) {

    // return 1; solução mínima (solução vai mudando conforme o crescimento do código)

    return (inteiro % 3 == 0 && inteiro % 5 == 0) ? "FizzBuzz" :
    (inteiro % 3 == 0) ? "Fizz" :
    (inteiro % 5 == 0) ? "Buzz" :
    // (inteiro % 15 == 0) ? "FizzBuzz" : (solução válida mas não "correta")
    inteiro;
};