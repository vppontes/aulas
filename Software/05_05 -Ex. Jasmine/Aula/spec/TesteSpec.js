// paste spec é onde fica o teste automatizado

describe("Teste TDD", function() {

    it("Listagem", function() {
        expect(inteiro(1)).toBe(1);
        expect(inteiro(2)).toBe(2);
        expect(inteiro(3)).toBe("Fizz");
        expect(inteiro(4)).toBe(4);
        expect(inteiro(5)).toBe("Buzz");
        expect(inteiro(6)).toBe("Fizz");
        expect(inteiro(10)).toBe("Buzz");
    });
});