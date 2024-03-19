let button = document.querySelector('#enviar');
button.addEventListener('click', adicionarLinha);

let buttonRemoverMaior = document.querySelector('#removeMaiorIMC');
buttonRemoverMaior.addEventListener('click', verificarMaiorImc);

let buttonRemoverMenor = document.querySelector('#removeMenorIMC');
buttonRemoverMenor.addEventListener('click', verificarMenorImc);

function calcularIMC(peso, altura) {
    let imc = peso / Math.pow(altura, 2);
    return parseFloat(imc.toFixed(1));

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
function adicionarLinha(e){
    e.preventDefault();

    let tabela = document.querySelector("#tabela tbody");

    let nome = document.querySelector("#nome").value;
    let peso = parseFloat(document.querySelector("#peso").value);
    let altura = parseFloat(document.querySelector("#altura").value);

    if (isNaN(peso) ||peso <= 0 || isNaN(altura)|| altura <= 0 || nome === "") {
        alert("Preencha os campos corretamente");
        return;
    }else{
        let imc = calcularIMC(peso, altura);
        let status = verificarStatus(imc);

        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = nome;
        tr.append(td1);
    
        let td2 = document.createElement("td");
        td2.innerHTML = peso;
        tr.append(td2);
    
        let td3 = document.createElement("td");
        td3.innerHTML = altura;
        tr.append(td3);
    
        let td4 = document.createElement("td");
        td4.innerHTML = imc;
        td4.classList.add("imc");
        tr.append(td4);
    
        let td5 = document.createElement("td");
        td5.innerHTML = status;
        tr.append(td5);
    
        let td6 = document.createElement("td");

        let b1 = document.createElement("button");
        b1.innerText = "Excluir"
        b1.classList.add("excluir")
        b1.addEventListener('click', removerLinha);

        let b2 = document.createElement("button");
        b2.innerText = "+peso"
        b2.classList.add("addPeso")
        b2.addEventListener('click', addPeso);

        let b3 = document.createElement("button");
        b3.innerText = "-peso"
        b3.classList.add("removePeso")
        b3.addEventListener('click', removePeso);

        td6.append(b1);
        td6.append(b2);
        td6.append(b3);
        tr.append(td6);

        tabela.append(tr);
    }

}

function removerLinha(e){
    e.preventDefault();

    let elemento = e.target;
    let tr = elemento.parentElement.parentElement;

    tr.remove();
}

function addPeso(e){
    
    let elemento = e.target;
    let pesoHTML = elemento.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    let peso = parseFloat(pesoHTML.innerHTML);
    peso += 0.5;
    pesoHTML.innerHTML = peso;

    let alturaHTML = elemento.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    let altura = parseFloat(alturaHTML.innerHTML);

    let imcHTML = elemento.parentElement.previousElementSibling.previousElementSibling;
    imcHTML.innerHTML = calcularIMC(peso, altura);

    let statusHTML = elemento.parentElement.previousElementSibling
    statusHTML.innerHTML = verificarStatus(imcHTML.innerHTML);
}

function removePeso(e){
    
    let elemento = e.target;
    let pesoHTML = elemento.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
    let peso = parseFloat(pesoHTML.innerHTML);
    peso -= 0.5;
    pesoHTML.innerHTML = peso;

    let alturaHTML = elemento.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
    let altura = parseFloat(alturaHTML.innerHTML);

    let imcHTML = elemento.parentElement.previousElementSibling.previousElementSibling;
    imcHTML.innerHTML = calcularIMC(peso, altura);

    let statusHTML = elemento.parentElement.previousElementSibling
    statusHTML.innerHTML = verificarStatus(imcHTML.innerHTML);
}

function verificarMaiorImc(e){
    e.preventDefault();

    let maiorIMC = 0;

    let listaImcs = document.querySelectorAll(".imc");
    let elementoRemovivel;

    if(listaImcs.length  > 0 ){
        for (elemento of listaImcs){
            if(maiorIMC <= parseFloat(elemento.innerHTML)){
                maiorIMC = parseFloat(elemento.innerHTML);
                elementoRemovivel = elemento;
            }
        }
    
        elementoRemovivel.parentElement.remove();
    }else{
        return;
    }
    
}

function verificarMenorImc(e){
    e.preventDefault();

    let menorIMC = Math.pow(100,100);

    let listaImcs = document.querySelectorAll(".imc");
    let elementoRemovivel2;
    
    if (listaImcs.length > 0){
        for (elemento of listaImcs){
            if(menorIMC >= parseFloat(elemento.innerHTML)){
                menorIMC = parseFloat(elemento.innerHTML);
                elementoRemovivel2 = elemento;
            }
        }
        elementoRemovivel2.parentElement.remove();
    }else{
        return;
    }
    
}

function removeIMC(elemento){
    elemento.parentElement.remove();
}

