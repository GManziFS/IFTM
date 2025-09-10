var cartas = [];

for (var i = 0; i < 27; i++) {
    cartas[i] = `img/cartas/carta${i + 1}.png`;
}

for(i = 0; i < 4; i++){
    document.writeln(`<center><br>Jogador ${i + 1}:</center>`)
    for(j = 0; j < 3; j++){
        var cartaAleatoria = Math.floor(Math.random()*cartas.length)

        document.write(`<center><img src="${cartas[cartaAleatoria]}" alt=""`)
        cartas.splice(cartaAleatoria, 1)
    }
    document.writeln(`<br>`)
}