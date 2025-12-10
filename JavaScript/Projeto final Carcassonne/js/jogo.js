import monte from "./monte.js";
import { allTiles, maxRotations } from "./tiles.js";

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("playerModal");

    const botoes = document.querySelectorAll(".player-btn");

    const labelJogadores = document.getElementById("labelJogadores");
    const nameInputs = document.getElementById("nameInputs");

    const buttonsPlayers = document.getElementById("buttonsPlayers");
    const contPlacar = document.getElementById("contPlacar");

    const tabuleiro = document.getElementById("tabuleiro");
    const peça = document.getElementById('peça');

    const cardVirado = document.getElementById('cardVirado');

    const btnRodar = document.getElementById('btnRodar');

    const areaCompra = document.getElementById("areaCompra")

    const btnPular = document.getElementById("btnPular")

    const linhas = 50;
    const colunas = 50;

    let matriz = [];
    let cartaAtual = null;
    let temCard = "nao";

    const status = {
        players: [],
        turno: 0
    };

    modal.classList.add("show");
    botoes.forEach(btn => btn.addEventListener("click", numeroPlayers));

    function numeroPlayers(event) {
        const quantidade = Number(event.currentTarget.dataset.value);

        buttonsPlayers.style.display = "none";
        nameInputs.innerHTML = "";
        nameInputs.style.display = "flex";
        nameInputs.style.flexDirection = "column";
        nameInputs.style.gap = "10px";

        labelJogadores.innerHTML = "Nome dos jogadores";

        for (let i = 0; i < quantidade; i++) {
            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = `Nome do Player ${i + 1}`;
            input.classList.add("inputNome");
            nameInputs.appendChild(input);
        }

        const botaoConfirmar = document.createElement("button");
        botaoConfirmar.innerText = "Confirmar";
        botaoConfirmar.classList.add("btnConfirmar");
        botaoConfirmar.addEventListener("click", confirmarNomes);
        nameInputs.appendChild(botaoConfirmar);

        function confirmarNomes() {
            const inputs = document.querySelectorAll(".inputNome");
            let valido = true;
            status.players = [];

            inputs.forEach((input, idx) => {
                const nome = input.value.trim();
                if (!nome) valido = false;

                status.players.push({
                    id: idx,
                    nome,
                    pontuacao: 0,
                    meeples: 7
                });
            });

            if (!valido) {
                Swal.fire({
                    title: 'Campos incompletos',
                    text: 'Preencha todos os nomes antes de continuar.',
                    icon: 'error',
                    confirmButtonText: 'Ok'
                });
                return;
            }

            atualizarPlacar();
            modal.classList.remove("show");
            tabuleiro.style.display = "grid";
            contPlacar.style.display = "flex"
            areaCompra.style.display = "flex"

            setTimeout(() => {
                const linha = 24;
                const coluna = 24;

                const celulaCentral = document.querySelector(`.celula[data-linha="${linha}"][data-coluna="${coluna}"]`);
                if (!celulaCentral) return;

                const rect = celulaCentral.getBoundingClientRect();
                const scrollX = rect.left + window.scrollX - window.innerWidth / 2 + rect.width / 2;
                const scrollY = rect.top + window.scrollY - window.innerHeight / 2 + rect.height / 2;

                window.scrollTo({
                    top: scrollY,
                    left: scrollX,
                    behavior: "auto"
                });
            }, 50);
        }
    }

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];

        for (let j = 0; j < colunas; j++) {
            matriz[i][j] = null;

            const celula = document.createElement("div");
            celula.classList.add("celula");
            celula.dataset.linha = i;
            celula.dataset.coluna = j;

            // peça inicial no centro
            if (i === 24 && j === 24) {
                const tile = allTiles.castleWallRoad0;

                const img = document.createElement("img");
                img.src = tile.img;
                img.classList.add("tile");

                celula.appendChild(img);

                matriz[i][j] = {
                    ...tile,
                    element: celula,
                    regioes: gerarRegioesMeeple(tile)
                };

                celula.dataset.nomeTile = "castleWallRoad0";
            }

            celula.addEventListener("click", () => posicionarCarta(i, j));
            tabuleiro.appendChild(celula);
        }
    }

    function posicionarCarta(linha, coluna) {
        const celula = matriz[linha][coluna]?.element ||
            document.querySelector(`.celula[data-linha="${linha}"][data-coluna="${coluna}"]`);

        if (!cartaAtual) {
            Swal.fire("Abra uma carta", "Abra uma carta antes de posicioná-la", "error");
            return;
        }

        if (matriz[linha][coluna]) {
            Swal.fire("Posição inválida", "Já existe uma peça aqui", "error");
            return;
        }

        const vizinhos = [
            matriz[linha - 1]?.[coluna],
            matriz[linha + 1]?.[coluna],
            matriz[linha]?.[coluna - 1],
            matriz[linha]?.[coluna + 1]
        ];

        if (!vizinhos.some(v => v)) {
            Swal.fire("Posição inválida", "A peça deve estar adjacente a outra", "error");
            return;
        }

        let encaixa = true;
        const [cima, baixo, esquerda, direita] = vizinhos;

        if (cima && cima.conteudo.baixo !== cartaAtual.conteudo.topo) encaixa = false;
        if (baixo && baixo.conteudo.topo !== cartaAtual.conteudo.baixo) encaixa = false;
        if (esquerda && esquerda.conteudo.direita !== cartaAtual.conteudo.esquerda) encaixa = false;
        if (direita && direita.conteudo.esquerda !== cartaAtual.conteudo.direita) encaixa = false;

        if (!encaixa) {
            Swal.fire("Peça incompatível", "Não encaixa com adjacentes", "error");
            return;
        }

        const img = document.createElement("img");
        img.src = cartaAtual.img;
        img.classList.add("tile");

        celula.appendChild(img);

        matriz[linha][coluna] = {
            ...cartaAtual,
            element: celula,
            regioes: gerarRegioesMeeple(cartaAtual)
        };

        cartaAtual = null;
        temCard = "nao";
        peça.innerHTML = "";
        btnRodar.style.display = "none";

        habilitarCliqueMeeple(matriz[linha][coluna], linha, coluna);
    }

    cardVirado.addEventListener('click', () => {
        if (temCard === "sim") {
            Swal.fire("Posicione primeiro", "Já há um card para ser posicionado", "error");
            return;
        }

        const carta = monte.shift();
        if (!carta) {
            Swal.fire("Acabou!", "Não há mais cartas", "error");
            return;
        }

        cartaAtual = carta;

        const img = document.createElement("img");
        img.src = carta.img;
        img.classList.add("cartaDesvirada");

        peça.innerHTML = "";
        peça.appendChild(img);

        temCard = "sim";
        btnRodar.style.display = "flex";
    });

    btnRodar.addEventListener("click", () => {
        if (!cartaAtual) return;

        const id = cartaAtual.id;
        const max = maxRotations[id];

        const numero = parseInt(id.match(/\d+$/)[0]);
        const novoNumero = (numero + 1) % max;

        const novoID = id.replace(/\d+$/, novoNumero);
        const novaCarta = allTiles[novoID];

        if (!novaCarta) return;

        cartaAtual = novaCarta;

        const img = document.createElement("img");
        img.src = cartaAtual.img;
        img.classList.add("cartaDesvirada");

        peça.innerHTML = "";
        peça.appendChild(img);
    });

    function gerarRegioesMeeple(tile) {
        const regioes = [];

        // Estradas
        if (tile.conteudo.topo === 2) regioes.push({ id: "estrada-topo", tipo: "estrada", x: 50, y: 10 });
        if (tile.conteudo.direita === 2) regioes.push({ id: "estrada-direita", tipo: "estrada", x: 90, y: 50 });
        if (tile.conteudo.baixo === 2) regioes.push({ id: "estrada-baixo", tipo: "estrada", x: 50, y: 90 });
        if (tile.conteudo.esquerda === 2) regioes.push({ id: "estrada-esquerda", tipo: "estrada", x: 10, y: 50 });

        // Cidades nas bordas
        if (tile.conteudo.topo === 3) regioes.push({ id: "cidade-topo", tipo: "cidade", x: 50, y: 10 });
        if (tile.conteudo.direita === 3) regioes.push({ id: "cidade-direita", tipo: "cidade", x: 90, y: 50 });
        if (tile.conteudo.baixo === 3) regioes.push({ id: "cidade-baixo", tipo: "cidade", x: 50, y: 90 });
        if (tile.conteudo.esquerda === 3) regioes.push({ id: "cidade-esquerda", tipo: "cidade", x: 10, y: 50 });

        // Cidade central
        if (tile.conteudo.centro === 3)
            regioes.push({ id: "cidade-centro", tipo: "cidade", x: 50, y: 50 });

        // Mosteiro
        if (tile.conteudo.centro === 4)
            regioes.push({ id: "mosteiro-centro", tipo: "mosteiro", x: 50, y: 50 });

        return regioes;
    }

    function habilitarCliqueMeeple(tile, linha, coluna) {
        tile.regioes.forEach(r => {
            if (r.meeple || regiaoOcupada(tile, r.tipo, r.id)) return;

            const div = document.createElement("div");
            div.classList.add("regiao-clique");

            div.style.position = "absolute";
            div.style.width = "30%";
            div.style.height = "30%";
            div.style.left = `${r.x - 15}%`;
            div.style.top = `${r.y - 15}%`;
            div.style.cursor = "pointer";
            div.style.backgroundColor = "rgba(97, 97, 97, 0.51)";

            btnPular.style.display = "flex"

            tile.element.appendChild(div);

            div.addEventListener("click", e => {
                e.stopPropagation();

                const playerAtual = status.players[status.turno];

                if (r.meeple) {
                    Swal.fire("Região ocupada", "Não é possível colocar meeple aqui", "error");
                    return;
                }

                if (playerAtual.meeples <= 0) {
                    Swal.fire("Sem meeples", "Você não tem meeples disponíveis", "error");
                    return;
                }

                r.meeple = { player: playerAtual.id};
                desenharMeeple(tile, r.x, r.y, playerAtual.id);

                div.remove();
                playerAtual.meeples--;

                btnPular.style.display = "none"
                proximoTurno();
                removerTodosDivsClique();
            });
        });
    }

    btnPular.addEventListener("click", function(){
        proximoTurno();
        removerTodosDivsClique();
        btnPular.style.display = "none"
    })

    function desenharMeeple(tile, x, y, playerIndex) {
        const meepleEl = document.createElement("img");

        meepleEl.src = `img/meeple${playerIndex}.png`;
        meepleEl.classList.add("meeple");
        meepleEl.style.position = "absolute";

        meepleEl.style.left = x + "px";
        meepleEl.style.top = y + "px";

        tile.element.appendChild(meepleEl);
    }


    function atualizarPlacar() {
        contPlacar.innerHTML = "";

        status.players.forEach((p, idx) => {
            const div = document.createElement("div");
            div.classList.add("player");

            if (idx === status.turno) div.classList.add("turno-atual");

            div.innerHTML = `${p.nome}: ${p.pontuacao}<br>Meeples:<img src="img/meeple${idx}.png">${p.meeples}`;
            contPlacar.appendChild(div);
        });
    }

    function proximoTurno() {
        status.turno = (status.turno + 1) % status.players.length;
        console.log("Turno do jogador:", status.players[status.turno].nome);
        atualizarPlacar();
    }

    function removerTodosDivsClique() {
        const divs = document.querySelectorAll(".regiao-clique");
        divs.forEach(d => d.remove());
    }

    function regiaoOcupada(tile, regiaoTipo, regiaoId) {
        const regiaoAtual = tile.regioes.find(r => r.id === regiaoId);
        if (!regiaoAtual) return false;

        for (let i = 0; i < linhas; i++) {
            for (let j = 0; j < colunas; j++) {
                const t = matriz[i][j];
                if (!t) continue;

                for (const r of t.regioes) {
                    if (r.tipo !== regiaoTipo) continue;
                    if (!r.meeple) continue;

                    const ladoAtual = regiaoId.split("-")[1];
                    const ladoOutro = r.id.split("-")[1];

                    if (ladoAtual === ladoOutro) return true;
                }
            }
        }

        return false;
    }
});
