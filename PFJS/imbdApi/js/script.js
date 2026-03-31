const API_KEY = "de6762ceeaea7da35117a9b443767404";

const URL_POPULARES = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`;
const URL_GENEROS = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`;

const IMG_URL = "https://image.tmdb.org/t/p/w500";

window.addEventListener("DOMContentLoaded", async () => {
    try {
        const [resFilmes, resGeneros] = await Promise.all([
            fetch(URL_POPULARES),
            fetch(URL_GENEROS)
        ]);

        const dataFilmes = await resFilmes.json();
        const dataGeneros = await resGeneros.json();

        const filmes = dataFilmes.results.slice(0, 10);
        const generos = dataGeneros.genres;

        const container = document.getElementById("container");

        filmes.forEach(filme => {
            const generosFilme = filme.genre_ids.map(id => {
                const genero = generos.find(g => g.id === id);
                return genero ? genero.name : "";
            });

            const dataFormatada = filme.release_date
                ? new Date(filme.release_date).toLocaleDateString("pt-BR")
                : "Sem data";

            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${IMG_URL + filme.poster_path}" alt="${filme.title}">
                <h2>${filme.title}</h2>
                <p><strong>Nota:</strong> ${filme.vote_average}</p>
                <p><strong>Lançamento:</strong> ${dataFormatada}</p>
                <p><strong>Gêneros:</strong> ${generosFilme.join(", ")}</p>
            `;

            container.appendChild(card);
        });

    } catch (erro) {
        console.error("Erro ao carregar dados:", erro);
    }
});