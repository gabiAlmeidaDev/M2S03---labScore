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


function exibirResultado(media) {
    if (media > 7) {
        console.log("Parabéns você passou na média!");
    } else {
        console.log("Infelizmente você está de recuperação.");
    }
}

exibirResultado(8.5);
exibirResultado(6.0); 

function imprimirNomes(alunos) {
    alunos.forEach(function(nome) {
        console.log(nome);
    });
}

let nomesDeAlunos = ["João", "Maria", "Pedro", "Ana"];
imprimirNomes(nomesDeAlunos);

for (let i = 0; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}
