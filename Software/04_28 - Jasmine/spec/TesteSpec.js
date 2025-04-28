describe("Lista de testes", () => {

    describe("Aprovado ou Reprovado", () => {

        it("Passou ou não Passou", () => {    

            var res = aluno();

            expect(res).toEqual("Reprovado");
        });
    });

    describe("Qual variável é maior?", () => {

        it("A ou B", () => {

            var resultado = comparacao();
            
            expect(resultado).toEqual(true);
        });
    });

    describe("Pessoa", () => {

        var nome = "Luiz";
        var sobrenome = "Carlos";
        var idade = 52;
        var cabelo = "PRETO";

        var pessoa = new Pessoa(nome, sobrenome, idade, cabelo);

        it("Método - nome_sobrenome", () => {
            
            expect("Luiz Carlos").toBe(pessoa.nome());
        });

        it("Método - nome_sobrenome_idade", () => {
            
            expect("Luiz Carlos tem idade igual a 52").toBe(pessoa.nome_idade());
        });

        it("Método - nome_sobrenome_corCabelo", () => {
            
            expect("Luiz Carlos tem cabelo de cor PRETO").toBe(pessoa.nome_corCabelo());
        });
    });
});