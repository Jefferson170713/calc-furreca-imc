// --- PARTE 1: Número Aleatório de 1 a 5 ---

// Math.random() * 5 -> Gera algo entre 0.0 e 4.999...
// Math.floor(...)   -> Transforma em inteiro: 0, 1, 2, 3 ou 4
// + 1               -> Transforma em: 1, 2, 3, 4 ou 5
const numeroSorteado = Math.floor(Math.random() * 10) + 1;

// console.log(`Número gerado (1-10): ${numeroSorteado}`)

for (i=0; 10; i++) {
    console.log(`Número gerado (1-10): ${numero}`);
}
for (const numero of numeroSorteado) {
    console.log(`Número gerado (1-10): ${numero}`);
}