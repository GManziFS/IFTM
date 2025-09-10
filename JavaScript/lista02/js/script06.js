var n = [];

for(i = 0; i < 60; i++){
    n[i] = i + 1;
}

for(i = 0; i < 6; i++){
    var numeros = Math.floor(Math.random()* n.length);
    document.writeln(n[numeros])
    n.splice(numeros, 1)
}