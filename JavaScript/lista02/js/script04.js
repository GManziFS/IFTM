var N = parseInt(prompt("Digite um número desejado onde sera o valor Minimo sorteado: "));
var M = parseInt(prompt("Digite um número desejado onde sera o valor maximo sorteado: "));
var numaleatorio = Math.floor(Math.random() * (M - N + 1)) + N; 
document.write(numaleatorio);