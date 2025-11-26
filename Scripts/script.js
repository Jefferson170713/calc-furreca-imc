

// --- 1. SUA FUNÇÃO DE LÓGICA (O Cérebro) ---
// (Mantive exatamente como você fez, só removi a linha 'let resultado = String' que era desnecessária)
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

// --- 2. A FUNÇÃO "MAESTRO" (A Cola com o HTML) ---
function executarCalculo() {
    // A. PEGAR (GET) os dados do HTML
    // Usamos .value para pegar o que foi digitado
    let nomeUsuario = document.getElementById('nome').value;
    let pesoUsuario = document.getElementById('peso').value;   // Converte texto para número
    let alturaUsuario = document.getElementById('altura').value; // Converte texto para número

    // B. PROCESSAR (Chamar sua função)
    // Passamos os valores que pegamos acima para a sua lógica
    // if (!pesoUsuario || !alturaUsuario) {
    //     alert("Por favor, preencha peso e altura!");
    //     return; // Para a execução da função aqui
    // }

    let resultadoFinal = calcImcDaGalera(pesoUsuario, alturaUsuario);

    // C. DEVOLVER (SET) para a tela
    // Montamos uma frase bonitinha
    let mensagemNaTela = `Olá <strong>${nomeUsuario}</strong>! <br> Seu resultado: ${resultadoFinal}`;

    // Jogamos essa mensagem dentro da DIV 'resultado'
    document.getElementById('resultado').innerHTML = mensagemNaTela;
}