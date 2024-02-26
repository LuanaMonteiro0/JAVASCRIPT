// Retorna uma lista com os "qtde" primeiros números primos, começando em 1.
function primos(qtde) {
    let isPrime = function(nros){
        let count = 0;
        for(let i = 1; i <= nros; i++){
            if(nros % i === 0){
                count++;
            }
        }
        return count > 2? false : true;
    }

    var vetor = [];
    let nros = 1;
    while(qtde > 0){
        if(isPrime(nros)){
            vetor.push(nros)
            qtde--;
        }
        nros++;
    }
    return vetor;
}

// Retorna a lista de palavras palíndromas
// Deve ser implementada usando map/filter/reduce
function palindromo(palavras) {
    let isPalindrome = function(word){
        reverseWord = word.split("").reverse().join("");
        return reverseWord.toUpperCase() == word.toUpperCase()? true : false; 
    }

    return palavras.filter(isPalindrome);

}

// Retorna se dois aviões estão com perigo de colisão.
// Em geral, a margem de segurança entre dois aviões é de 1000 pés.
// Cada pé é igual a 0.3048 metros.
function perigoAcidente(altura_pes_aviao1, altura_met_aviao2) {
    pe_avi2 = altura_met_aviao2 / 0.3048;
    if (pe_avi2 >= 0 && altura_pes_aviao1 >= 0 || pe_avi2 < 0 && altura_pes_aviao1 <0){
        dist = Math.abs(pe_avi2 - altura_pes_aviao1);
        if (dist >= 1000){
            return false;
        }
        return true;
    }else{
        dist = Math.abs(pe_avi2) + Math.abs(altura_pes_aviao1);
        if (dist >= 1000){
            return false;
        }
        return true;
    }    

}

// Função que retorna uma lista sem nenhum item duplicado.
function apenasUnicos(lista) {
    
    let removeRepeat = function(e, ind, lista){
        for (let i = 0; i < lista.length; i++){
            if(e === lista[i] && ind !== i){
                return false;
            }
        }
        return true;
    }

    let listaUnica = lista.filter(removeRepeat);
    return listaUnica;

}

// Retorna a soma dos "qtde" primeiros números pares (zero é um número par!)
function somaNumerosPares(qtde) {
    sum = 0
    par = 0
    for (var i = 0; i < qtde; i++) {
        sum += par;
        par += 2;
    }
    return sum;

}

// Recebe uma lista numérica e retorna uma lista cujos valores foram multiplicados por 2.
// Deve ser implementada usando map/filter/reduce
function dobro(valores) {
    function multiply(val){
        return val * 2
    }

    let listaMultiply = valores.map(multiply);
    return listaMultiply;

}

// Recebe duas listas e retorna uma lista com a união das listas de entrada, sem repetições.
function uniao(v1, v2) {
    let listaUniao = v1.slice();
    
    for (let i = 0; i < listaUniao.length; i++){
        let flag = false;
        let elem;
        for(let j = 0; j < v2.length; j++){
            elem = v2[j];
            if(listaUniao[i]=== v2[j]){
                flag = true;
            }
        }
        if(!flag){
            listaUniao.push(elem);
        }
    }
        
    return listaUniao;
}

// Função que recebe duas listas e retorna os elementos da primeira lista que não estejam na segunda lista.
function diff(v1, v2) {

}

// Recebe duas listas numéricas e retorna o vetor cuja soma dos valores é maior que a outra lista. Caso ambas as listas tenham mesmo valor, retorna FALSE. Considere vetor vazio com soma zero.
// Deve ser implementada usando map/filter/reduce
function maior(v1, v2) {

}

// Recebe um valor e uma lista. Retorna a lista sem nenhuma ocorrência do valor de entrada.
// Deve ser implementada usando map/filter/reduce
function removeValores(valor, lista) {

}

module.exports = { primos, palindromo, perigoAcidente, apenasUnicos, somaNumerosPares, dobro, uniao, diff, maior, removeValores }