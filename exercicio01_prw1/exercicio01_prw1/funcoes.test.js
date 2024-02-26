const { primos, palindromo, perigoAcidente, apenasUnicos, somaNumerosPares, dobro, uniao, diff, maior, removeValores } = require('./funcoes');

// Primos
describe("Testando a função de números primos", () => {
    test('Retorna os 0 primeiros primos', () => {
        expect(primos(0)).toEqual([]);
    });

    test('Retorna os 1 primeiros primos', () => {
        expect(primos(1)).toEqual([1]);
    });

    test('Retorna os 5 primeiros primos', () => {
        expect(primos(5)).toEqual([1, 2, 3, 5, 7]);
    });

    test('Retorna os 10 primeiros primos', () => {
        expect(primos(10)).toEqual([1, 2, 3, 5, 7, 11, 13, 17, 19, 23]);
    });
});

// Palíndromo
describe("Testando a função de palavras palíndromas", () => {
    test('Retorna nenhuma palavra palindroma - Lista Vazia', () => {
        expect(palindromo([])).toEqual([]);
    });

    test('Retorna nenhuma palavra palindroma', () => {
        expect(palindromo(["abc", "def", "ghi"])).toEqual([]);
    });

    test('Retorna 1 palavras palindromas', () => {
        expect(palindromo(["abc", "ovo", "ghi"])).toEqual(["ovo"]);
    });

    test('Retorna 2 palavras palindromas', () => {
        expect(palindromo(["abc", "ovo", "ghi", "omo"])).toEqual(["ovo", "omo"]);
    });

    test('Retorna 2 palavras palindromas com diferença no case', () => {
        expect(palindromo(["abc", "ovO", "ghi", "Omo"])).toEqual(["ovO", "Omo"]);
    });

    test('Retorna vários casos', () => {
        expect(palindromo(["Socos", "ovO", "IFSP", "Radar", "Omo", "a", "A"])).toEqual(["Socos", "ovO", "Radar", "Omo", "a", "A"]);
    });
});

// Perigo Acidente
describe("Testando a função de perigo de acidente aéreo", () => {
    test('Dois aviões na mesma altitude', () => {
        expect(perigoAcidente(15000, 4572)).toEqual(true);
    });

    test('Dois aviões em altitudes diferentes', () => {
        expect(perigoAcidente(1000, 1000)).toEqual(false);
    });

    test('Dois aviões com alturas estranhas 1', () => {
        expect(perigoAcidente(-15000, -4572)).toEqual(true);
    });

    test('Dois aviões com alturas estranhas 2', () => {
        expect(perigoAcidente(15000, -4572)).toEqual(false);
    });

    test('Dois aviões com alturas estranhas 3', () => {
        expect(perigoAcidente(-15000, 4572)).toEqual(false);
    });

    test('Dois aviões muito próximos 1', () => {
        expect(perigoAcidente(10000, 2950)).toEqual(true);
    });

    test('Dois aviões muito próximos 2', () => {
        expect(perigoAcidente(10000, 3100)).toEqual(true);
    });
});

// Lista com elementos únicos
describe("Testando a função que retorna listas com elementos únicos", () => {
    test('Lista vazia', () => {
        expect(apenasUnicos([])).toEqual([]);
    });

    test('Lista com um único valor', () => {
        expect(apenasUnicos([1])).toEqual([1]);
    });

    test('Lista com dois valores iguais', () => {
        expect(apenasUnicos([1, 1])).toEqual([]);
    });

    test('Lista variada 1', () => {
        expect(apenasUnicos([1, 2, 3, 1, 2, 4, 6, "IFSP", "S"])).toEqual([3, 4, 6, "IFSP", "S"]);
    });

    test('Lista variada 2', () => {
        expect(apenasUnicos(["a", "A", 1, 1.1, 1.2])).toEqual(["a", "A", 1, 1.1, 1.2]);
    });

    test('Lista variada 3', () => {
        expect(apenasUnicos([true])).toEqual([true]);
    });
});

// Soma dos N primeiros números pares
describe("Soma dos N primeiros números pares", () => {
    test('Zero', () => {
        expect(somaNumerosPares(0)).toEqual(0);
    });

    test('Um', () => {
        expect(somaNumerosPares(1)).toEqual(0);
    });

    test('Dois', () => {
        expect(somaNumerosPares(2)).toEqual(2);
    });

    test('Três', () => {
        expect(somaNumerosPares(3)).toEqual(6);
    });

    test('Quatro', () => {
        expect(somaNumerosPares(4)).toEqual(12);
    });

    test('Cem', () => {
        expect(somaNumerosPares(100)).toEqual(9900);
    });

    test('Algum número grande', () => {
        expect(somaNumerosPares(2138)).toEqual(4568906);
    });

    test('Algum número MUITO grande', () => {
        expect(somaNumerosPares(81232)).toEqual(6598556592);
    });
});

// Duplica todos os valores da entrada
describe("Dobra o vetor de entrada", () => {
    test('Vazio', () => {
        expect(dobro([])).toEqual([]);
    });

    test('Zero', () => {
        expect(dobro([0])).toEqual([0]);
    });

    test('Casos diversos', () => {
        expect(dobro([1, -1, 0, 0, 5.5, 10])).toEqual([2, -2, 0, 0, 11, 20]);
    });
});

// Une duas listas, sem duplicações
describe("União de duas listas, sem valores duplicados", () => {
    test('Vazio - 1', () => {
        expect(uniao([], [])).toEqual([]);
    });

    test('Vazio - 2', () => {
        expect(uniao([], [0])).toEqual([0]);
    });

    test('Vazio - 3', () => {
        expect(uniao([0], [])).toEqual([0]);
    });

    test('Normal', () => {
        expect(uniao([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('Duplicado - 1', () => {
        expect(uniao([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('Duplicado - 2', () => {
        expect(uniao([1, 2, 3], [1, 1, 1])).toEqual([1, 2, 3]);
    });

    test('Tipos - 1', () => {
        expect(uniao([true, 1, "a"], [true, 3])).toEqual([true, 1, "a", 3]);
    });

    test('Tipos - 2', () => {
        expect(uniao([true, 1, true, null], [1.0, 3])).toEqual([true, 1, null, 3]);
    });
});

// Retorna valores em v1 que não estão em v2.
describe("Diff entre v1 e v2", () => {
    test('Vazio', () => {
        expect(diff([1, 2, 3], [])).toEqual([1, 2, 3]);
    });

    test('Vazio - 2', () => {
        expect(diff([], [1, 2, 3])).toEqual([]);
    });

    test('Casos diversos - 1', () => {
        expect(diff([1, true, "IFSP", 3, 5, 10], [true, 5])).toEqual([1, "IFSP", 3, 10]);
    });

    test('Casos diversos - 2', () => {
        expect(diff([1, true, "IFSP", 3, 5, 10], [1, true, "IFSP", 3, 5, 10])).toEqual([]);
    });
});

// Retorna o vetor cuja a soma dos valores é maior que o outro vetor.
describe("Retorna o vetor com maior valor", () => {
    test('Vazio', () => {
        expect(maior([], [])).toEqual(false);
    });

    test('Vazio - 2', () => {
        expect(maior([], [1, 2, 3])).toEqual([1, 2, 3]);
    });

    test('Iguais - 1', () => {
        expect(maior([3, 2, 1], [1, 2, 3])).toEqual(false);
    });

    test('Iguais - 2', () => {
        expect(maior([3, 2, 1], [6])).toEqual(false);
    });

    test('Iguais - 3', () => {
        expect(maior([3, 2, 1], [5])).toEqual([3, 2, 1]);
    });

    test('Casos diversos - 1', () => {
        expect(maior([1, 2, 3, 4, 5], [-1, -2, -3, -4, -5])).toEqual([1, 2, 3, 4, 5]);
    });

    test('Casos diversos - 2', () => {
        expect(maior([-1, -2, -3, -4, -5], [-2, -3, -4, -5, -6])).toEqual([-1, -2, -3, -4, -5]);
    });

    test('Casos diversos - 2', () => {
        expect(maior([-2, -3, -4, -5, -6], [-1, -2, -3, -4, -5])).toEqual([-1, -2, -3, -4, -5]);
    });
});

// Retorna o vetor de entrada sem nenhuma ocorrência de um valor esperado
describe("Remove um valor do vetor", () => {
    test('Vazio - 1', () => {
        expect(removeValores(1, [])).toEqual([]);
    });

    test('Vazio - 2', () => {
        expect(removeValores(1, [1])).toEqual([]);
    });

    test('Vazio - 3', () => {
        expect(removeValores(3, [3, 3, 3])).toEqual([]);
    });

    test('Diversos - 1', () => {
        expect(removeValores(true, [1, 2, 3, true])).toEqual([1, 2, 3]);
    });

    test('Diversos - 2', () => {
        expect(removeValores(0, [false, 1, true, true, false, 0])).toEqual([false, 1, true, true, false]);
    });

    test('Diversos - 3', () => {
        expect(removeValores(3, [0, "IFSP", -3, 10, 3, 3, true])).toEqual([0, "IFSP", -3, 10, true]);
    });
});