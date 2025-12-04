import monte from "./monte.js";
import { allTiles } from "./tiles.js";

document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById("playerModal");
    let botoes = document.querySelectorAll(".player-btn");

    let contPlacar = document.getElementById("contPlacar")

    let linhas = 50;
    let colunas = 50;

    let matriz = [];
    let tabuleiro = document.getElementById("tabuleiro");

    modal.classList.add("show");

    botoes.forEach(function (btn) {
        btn.addEventListener("click", numeroPlayers);
    });


    function numeroPlayers(event) {
        let quantidade = Number(event.currentTarget.getAttribute("data-value"));

        modal.classList.remove("show");
        contPlacar.innerHTML = "";

        for (let i = 0; i < quantidade; i++) {
            contPlacar.innerHTML += `<div id="player">Player ${i + 1}</div>`;
        }

        tabuleiro.style.display = "grid"
        setTimeout(() => {
            let linha = 24;
            let coluna = 24;

            let celulaCentral = document.querySelector(`.celula[data-linha="${linha}"][data-coluna="${coluna}"]`);

            if (!celulaCentral) return;

            let rect = celulaCentral.getBoundingClientRect();

            let scrollX = rect.left + window.scrollX - window.innerWidth / 2 + rect.width / 2;
            let scrollY = rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;

            window.scrollTo({
                top: scrollY,
                left: scrollX,
                behavior: "instant"
            });
        }, 50);
    }


    for (let i = 0; i < linhas; i++) {

        matriz[i] = [];

        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = null;

            let celula = document.createElement("div");
            celula.classList.add("celula");

            celula.dataset.linha = i;
            celula.dataset.coluna = j;

            if (i === 24 && j === 24) {
                let tile = allTiles.castleWallRoad0
                let img = document.createElement("img");
                img.src = tile.img;
                img.classList.add("tile")
                celula.appendChild(img);
                celula.dataset.nomeTile = "castleWallRoad0"
            }

            celula.addEventListener("click", (e) => {
                let linha = e.currentTarget.dataset.linha;
                let coluna = e.currentTarget.dataset.coluna;
                let nomeTile = e.currentTarget.dataset.nomeTile;
                console.log(`Linha: ${linha}, Coluna: ${coluna}, Tile: ${nomeTile}`);
                if (nomeTile != undefined) {
                    alert("Fiu, ja tem Tile aí, ta moscando?")
                } else {

                }
            });

            tabuleiro.appendChild(celula);
        }
    }





});


//Linha: 6, Coluna: 10