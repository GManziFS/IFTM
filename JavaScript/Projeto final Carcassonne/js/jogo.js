import monte from "./monte.js";
import { allTiles, maxRotations } from "./tiles.js";

document.addEventListener('DOMContentLoaded', function () {
    let modal = document.getElementById("playerModal");
    let botoes = document.querySelectorAll(".player-btn");
    let labelJogadores = document.getElementById("labelJogadores")

    let nameInputs = document.getElementById("nameInputs");
    let buttonsPlayers = document.getElementById("buttonsPlayers");
    let playerNames = [];

    let contPlacar = document.getElementById("contPlacar")

    let linhas = 50;
    let colunas = 50;

    let matriz = [];
    let tabuleiro = document.getElementById("tabuleiro");

    const peça = document.getElementById('peça');
    const cardVirado = document.getElementById('cardVirado');
    let temCard = "nao"

    let cartaAtual = null

    let btnRodar = document.getElementById('btnRodar');

    // modal.classList.add("show");

    // botoes.forEach(function (btn) {
    //     btn.addEventListener("click", numeroPlayers);
    // });


    // function numeroPlayers(event) {
    //     let quantidade = Number(event.currentTarget.getAttribute("data-value"));

    //     buttonsPlayers.style.display = "none";

    //     nameInputs.innerHTML = "";
    //     nameInputs.style.display = "flex";
    //     nameInputs.style.flexDirection = "column";
    //     nameInputs.style.gap = "10px";

    //     labelJogadores.innerHTML = "Nome dos jogadores"

    //     for (let i = 0; i < quantidade; i++) {
    //         let input = document.createElement("input");
    //         input.type = "text";
    //         input.placeholder = `Nome do Player ${i + 1}`;
    //         input.classList.add("inputNome");
    //         nameInputs.appendChild(input);
    //     }

    //     let botaoConfirmar = document.createElement("button");
    //     botaoConfirmar.innerText = "Confirmar";
    //     botaoConfirmar.classList.add("btnConfirmar");
    //     botaoConfirmar.addEventListener("click", confirmarNomes);

    //     nameInputs.appendChild(botaoConfirmar);

    //     function confirmarNomes() {
    //         playerNames = [];

    //         let inputs = document.querySelectorAll(".inputNome");
    //         let valido = true;

    //         inputs.forEach(input => {
    //             if (input.value.trim() === "") valido = false;
    //             playerNames.push(input.value.trim());
    //         });

    //         if (!valido) {
    //             alert("Preencha todos os nomes.");
    //             return;
    //         }

    //         contPlacar.innerHTML = "";
    //         playerNames.forEach((nome, index) => {
    //             contPlacar.innerHTML += `<div id="player">${nome}</div>`;
    //         });

    //         modal.classList.remove("show");

    //         tabuleiro.style.display = "grid";

    //         setTimeout(() => {
    //             let linha = 24;
    //             let coluna = 24;

    //             let celulaCentral = document.querySelector(`.celula[data-linha="${linha}"][data-coluna="${coluna}"]`);
    //             if (!celulaCentral) return;

    //             let rect = celulaCentral.getBoundingClientRect();
    //             let scrollX = rect.left + window.scrollX - window.innerWidth / 2 + rect.width / 2;
    //             let scrollY = rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;

    //             window.scrollTo({
    //                 top: scrollY,
    //                 left: scrollX,
    //                 behavior: "instant"
    //             });
    //         }, 50);
    //     }
    // }


    // tirar isso depois
    tabuleiro.style.display = "grid";
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
    // tirar isso depois


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
                let linha = parseInt(e.currentTarget.dataset.linha);
                let coluna = parseInt(e.currentTarget.dataset.coluna);
                let nomeTile = e.currentTarget.dataset.nomeTile;

                console.log(`Linha: ${linha}, Coluna: ${coluna}, Tile: ${nomeTile}`);

                if (nomeTile !== undefined) {
                    Swal.fire({
                        title: 'Posição inválida',
                        text: 'Posição desejada já possui uma peça.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                    return;
                }

                if (!cartaAtual) {
                    Swal.fire({
                        title: 'Abra uma carta',
                        text: 'Abra uma carta antes de posicioná-la',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                    return;
                }

                let cima = document.querySelector(`.celula[data-linha="${linha - 1}"][data-coluna="${coluna}"]`);
                let baixo = document.querySelector(`.celula[data-linha="${linha + 1}"][data-coluna="${coluna}"]`);
                let esquerda = document.querySelector(`.celula[data-linha="${linha}"][data-coluna="${coluna - 1}"]`);
                let direita = document.querySelector(`.celula[data-linha="${linha}"][data-coluna="${coluna + 1}"]`);

                let tileCima = (cima && cima.dataset.nomeTile) ? allTiles[cima.dataset.nomeTile] : null;
                let tileBaixo = (baixo && baixo.dataset.nomeTile) ? allTiles[baixo.dataset.nomeTile] : null;
                let tileEsquerda = (esquerda && esquerda.dataset.nomeTile) ? allTiles[esquerda.dataset.nomeTile] : null;
                let tileDireita = (direita && direita.dataset.nomeTile) ? allTiles[direita.dataset.nomeTile] : null;

                if (!tileCima && !tileBaixo && !tileEsquerda && !tileDireita) {
                    Swal.fire({
                        title: 'Posição inválida',
                        text: 'A peça deve estar adjacente a outra.',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                    return;
                }

                let encaixa = true;

                if (tileCima && cartaAtual && tileCima.conteudo.baixo !== cartaAtual.conteudo.topo) encaixa = false;
                if (tileBaixo && cartaAtual && tileBaixo.conteudo.topo !== cartaAtual.conteudo.baixo) encaixa = false;
                if (tileEsquerda && cartaAtual && tileEsquerda.conteudo.direita !== cartaAtual.conteudo.esquerda) encaixa = false;
                if (tileDireita && cartaAtual && tileDireita.conteudo.esquerda !== cartaAtual.conteudo.direita) encaixa = false;

                if (!encaixa) {
                    Swal.fire({
                        title: 'Peça incompatível',
                        text: 'Essa peça não encaixa com as demais adjacentes',
                        icon: 'error',
                        confirmButtonText: 'Ok'
                    });
                    return;
                }

                if (cartaAtual && cartaAtual.img) {
                    let img = document.createElement("img");
                    img.src = cartaAtual.img;
                    img.classList.add("tile");
                    celula.appendChild(img);
                    celula.dataset.nomeTile = cartaAtual.id;
                    matriz[linha][coluna] = cartaAtual;
                    cartaAtual = null;
                    temCard = "nao";
                    peça.innerHTML = "";
                    btnRodar.style.display = "none";
                }
            });


            tabuleiro.appendChild(celula);
        }
    }

    cardVirado.addEventListener('click', function () {
        if (temCard === "nao") {
            peça.innerHTML = "";
            const img = document.createElement('img');
            const carta = monte.shift();

            if (!carta || !carta.img || !carta.id) {
                Swal.fire({
                    title: 'Acabou!',
                    text: 'As cartas acabaram, acabe sua ação para o resultado final',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }

            cartaAtual = carta;
            img.src = carta.img;
            img.classList.add("cartaDesvirada");
            peça.appendChild(img);
            temCard = "sim";
            btnRodar.style.display = "flex";
            return;
        }

        if (temCard === "sim") {
            Swal.fire({
                title: 'Posicione primeiro',
                text: 'Já há um card para ser posicionado, favor posicionar antes de solicitar um novo',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
            return;
        }
    });

    btnRodar.addEventListener("click", () => {
        if (!cartaAtual) return;

        let id = cartaAtual.id;

        let max = maxRotations[id];
        if (typeof max !== "number") {
            console.warn("Max rotações não encontrado para", id);
            return;
        }

        let numeroMatch = id.match(/\d+$/);
        if (!numeroMatch) return;

        let numero = parseInt(numeroMatch[0]);

        let novoNumero = (numero + 1) % max;
        let novoID = id.replace(/\d+$/, novoNumero);

        let novaCarta = allTiles[novoID];
        if (!novaCarta) {
            console.warn("Carta não encontrada:", novoID);
            return;
        }

        cartaAtual = novaCarta;

        // atualiza a imagem na tela
        peça.innerHTML = "";
        const img = document.createElement("img");
        img.src = cartaAtual.img;
        img.classList.add("cartaDesvirada");
        peça.appendChild(img);
    });



});
