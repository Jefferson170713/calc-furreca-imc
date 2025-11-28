
function verificadorPesoAltura(value1, value2) {
    // const mensagemZueira = ''
    if ( (value1 !== 'number') ||  (value2 !== 'number') ) {
        return false;
        
    }
    return true;
}

function calcImcDaGalera(peso, altura) {
    let resultado = String;
    let calc = (peso / (altura * altura));

    if (calc < 18.5) {
        resultado = `${calc.toFixed(2)} - Abaixo do peso`;
    } else if (calc < 25) {
        resultado = `${calc.toFixed(2)} - Peso normal`;
    } else if (calc < 30) {
        resultado = `${calc.toFixed(2)} - Sobrepeso`;
    } else {
        resultado = `${calc.toFixed(2)} - Status de Obesidade`;
    }
    
    return resultado;
}

function executarCalculo() {

    let nomeUsuario = document.getElementById('nome').value;
    let pesoUsuario = Number(document.getElementById('peso').value);   // Converte texto para número
    let alturaUsuario = Number(document.getElementById('altura').value); // Converte texto para número

    if (!pesoUsuario || !alturaUsuario) {
        alert("Por favor, preencha peso e altura!");
        return; 
    }
    
    let resultadoFinal = calcImcDaGalera(pesoUsuario, alturaUsuario);


    let mensagemNaTela = `Olá <strong>${nomeUsuario}</strong>! <br> Seu resultado: ${resultadoFinal}`;

    document.getElementById('resultado').innerHTML = mensagemNaTela;
}

let valor1 = 10
let valor2 = 7

const valorComFuncao = verificadorPesoAltura(valor1, valor2)

console.log(valorComFuncao)
