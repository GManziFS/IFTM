var jokenpo = ["Pedra", "Papel", "Tesoura"]

var jogador1 = Math.floor(Math.random()*3)
var jogador2 = Math.floor(Math.random()*3)

if(jogador1 == jogador2){
    document.writeln("EMPATE<br>")
} else if (jogador1 == 0 && jogador2 == 2 || jogador1 == 1 && jogador2 == 0 || jogador1 == 2 && jogador2 == 1){
    document.writeln("JOGADOR 1 GANHOU!!!!<br>")
} else{
    document.writeln("JOGADOR 2 GANHOU!!!!<br>")
}

document.write("Jogador 1:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤJogador 2:<br>")
switch(jogador1){
    case 0:
        document.write('<img src="img/Jokenpo/0.webp" alt="" style="width: 250px;">')
        break;
    case 1:
        document.write('<img src="img/Jokenpo/1.jpg" alt="" style="width: 250px;">')
        break;
    case 2:
        document.write('<img src="img/Jokenpo/2.jpg" alt="" style="width: 250px;">')
        break;
}

switch(jogador2){
    case 0:
        document.write('<img src="img/Jokenpo/0.webp" alt="" style="width: 250px;">')
        break;
    case 1:
        document.write('<img src="img/Jokenpo/1.jpg" alt="" style="width: 250px;">')
        break;
    case 2:
        document.write('<img src="img/Jokenpo/2.jpg" alt="" style="width: 250px;">')
        break;
}