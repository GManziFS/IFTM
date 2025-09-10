var qtdAlunos = parseInt(prompt("Digite a quantidade de alunos:"));

var idade = [];
var nome = [];
var totalIdades = 0;

for (var i = 0; i < qtdAlunos; i++) {
    idade[i] = parseInt(prompt("Digite a idade do aluno " + (i+1) + ":"));
    nome[i] = prompt("Digite o nome do aluno " + (i+1) + ":");
    totalIdades += idade[i]
}

var media = totalIdades/qtdAlunos;

document.writeln(`A media de idades é ${media}`)

var nomeAleatorio = Math.floor(Math.random()*qtdAlunos)

document.write(`O aluno sorteado foi ${nome[nomeAleatorio]}`)
