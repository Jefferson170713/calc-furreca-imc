// Menor que 18.5: Abaixo do peso

// Entre 18.5 e 24.9: Peso normal

// Entre 25 e 29.9: Sobrepeso

// 30 ou mais: Obesidade

function calcImcDaGalera (peso, altura){
    let calc = (peso / (altura * altura) ).toFixed(2)
    return calc
}


const pessoas = [
    { nome: 'Jefferson', peso: 108.11, altura: 1.80 },
    { nome: 'Rayssa', peso: 77.8, altura: 1.61 },
    { nome: 'Ana Maria', peso: 76.65, altura: 1.60 },
    { nome: 'Junior Lopes', peso: 76.65, altura: 1.80 },
    { nome: 'Karina', peso: 54.34, altura: 1.65 },
    { nome: 'My Eggs', peso: 51.27, altura: 1.76 },
]

let demostracao = calcImcDaGalera(pessoas[0].peso, pessoas[0].altura)

console.log('Imc da galera: ')
for (let i = 0 ; i < pessoas.length ; i++) {
    let calc = calcImcDaGalera(pessoas[i].peso, pessoas[i].altura)
    console.log(`Nome: ${pessoas[i].nome} - Peso: ${pessoas[i].peso} - Altura: ${pessoas[i].altura} - IMC: ${calc}`)
}