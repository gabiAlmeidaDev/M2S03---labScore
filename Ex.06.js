function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}

let nomeMateria = prompt("Digite o nome da matéria:");

let notas = [];
let contador = 0;

while (contador < 4) {
    let nota = parseFloat(prompt("Digite a nota " + (contador + 1) + ":"));
    if (!isNaN(nota)) {  
        notas.push(nota);
        contador++;
    } else {
        alert("Por favor, insira um valor numérico.");
    }
}

let materia = {
    nomeMateria: nomeMateria,
    notas: notas
};

let media = calcularMedia(materia.notas);

document.write("A média de notas da matéria " + materia.nomeMateria + " é: " + media.toFixed(2));
