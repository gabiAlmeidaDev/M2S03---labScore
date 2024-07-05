
let notas = [7.5, 8.0, 9.5, 6.0];

function calcularMedia(notas) {
    let soma = 0;

    for (let i = 0; i < notas.length; i++) {
        soma += notas[i]; 
    }

    let media = soma / notas.length; 
    return media;
}

console.log("A média é: " + calcularMedia(notas));
