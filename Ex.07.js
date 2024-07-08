function encontrarMaiorNumero(numeros) {
    let maior = numeros[0]; 

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i]; 
        }
    }

    return maior;
}

let numeros = [5, 3, 9, 1, 6];
console.log("O maior número é:", encontrarMaiorNumero(numeros));
