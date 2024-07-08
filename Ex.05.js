
var nomeDoAluno = prompt("Qual o nome do aluno?");
var idadeDoAluno = prompt("Qual a idade do aluno?");
var serieDoAluno = prompt("Qual a série do aluno?");
var nomeDaEscola = prompt("Qual o nome da escola?");
var materiaFavorita = prompt("Qual a sua matéria favorita?");

var confirmacao = confirm("Você confirma os dados inseridos?");

if (confirmacao) {
    document.write("Nome do aluno: " + nomeDoAluno + "<br>");
    document.write("Idade do aluno: " + idadeDoAluno + "<br>");
    document.write("Série do aluno: " + serieDoAluno + "<br>");
    document.write("Nome da escola: " + nomeDaEscola + "<br>");
    document.write("Matéria favorita: " + materiaFavorita + "<br>");
} else {
    document.write("Os dados não foram confirmados.");
}
