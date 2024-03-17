
let button = document.querySelector('#enviar');
button.addEventListener('click', adicionarLinha);

function adicionarLinha(){
    let tabela = document.querySelector('#tabela tbody');

    let nome = document.querySelector('#nome');
    let peso = parseFloat(document.querySelector('#peso'));
    let altura = parseFloat(document.querySelector('#altura'));

    let imc = calcularIMC(peso, altura);
    let status = verificarStatus(imc);

    document.createElement('tr');
    for(let i = 0; i < 6, i++;){
        let td = document.createElement('td');
        td.textContent = nome.value;
        tabela.appendChild(td);
    }
    
}

function calcularIMC(peso, altura) {
    let imc = Math.pow(peso/altura);
    return imc;
}

function verificarStatus(imc){
    if (imc < 18.5){
        return 'Magreza';
    }else if (imc >= 18.5 && imc <= 24.9){
        return 'Saudável';
    }else if (imc >= 25 && imc <= 29.9){
        return 'Sobrepeso';
    }else if (imc >= 30 && imc <= 34.9){
        return 'Obesidade I';
    }else if (imc >= 35 && imc < 39.9){
        return 'Obesidade II';
    }else{
        return 'Obesidade III';
    }
}