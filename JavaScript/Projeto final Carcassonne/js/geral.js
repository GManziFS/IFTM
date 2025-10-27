import monte from "./monte.js";

document.addEventListener('DOMContentLoaded', function() {
    const monteDesvirado = document.getElementById('monteDesvirado');
    const cartaVirada = document.getElementById('cardVirado');

    cartaVirada.addEventListener('click', function() {
        if (monte.length === 0) {
            alert("Não há mais cartas no monte!");
            return;
        }

        const imagem = document.createElement('img');
        
        const carta = monte.shift();
        imagem.src = carta.img;
        
        monteDesvirado.appendChild(imagem);
    
    });

});
