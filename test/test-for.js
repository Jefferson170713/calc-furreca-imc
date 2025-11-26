const listaNomes = ['Jefferson', 'Eduardo', 'João Campos', 'João Pedro', 'Pedor Lucas', 'Rodrigo'];

for (i=0; i <  listaNomes.length; i++) {
    console.log(`Nome: ${listaNomes[i]}`);
}

const nomeSorteado = Math.floor(Math.random() * listaNomes.length);

console.log('O nome sorteado foi?');
console.log(`Nome: ${listaNomes[nomeSorteado]}`);

let numetoRepeticao = 200;

for (i=0; i <  numetoRepeticao; i++) {
    const nomeSorteado = Math.floor(Math.random() * listaNomes.length);
    console.log(`Nome: ${listaNomes[nomeSorteado]}`);
}