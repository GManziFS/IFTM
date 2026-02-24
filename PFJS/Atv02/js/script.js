const idades = [15, 22, 18, 30, 17, 45, 60, 12, 25];

const elementoSomaIdades = document.getElementById("soma-idades");
const elementoMediaIdades = document.getElementById("media-idades");
const elementoMaiorIdade = document.getElementById("maior-idade");
const elementoIdadesImpares = document.getElementById("idades-impares");
const elementoTodosMaioresIdade = document.getElementById("todos-maiores-idade");
const elementoTodasIdadesMaioresValor = document.getElementById("todas-idades-maiores-valor");
const elementoIdadesFiltradas = document.getElementById("idades-filtradas");
const elementoMediaIdadesFiltradas = document.getElementById("media-idades-filtradas");

const somaIdades = idades.reduce((acumulador, idade) => acumulador + idade, 0);
elementoSomaIdades.innerText = `a) Soma das idades: ${somaIdades}`;

const mediaIdades = somaIdades / idades.length;
elementoMediaIdades.innerText = `b) Média das idades: ${mediaIdades.toFixed(2)}`;

const maiorIdade = idades.reduce((maior, idade) =>
    idade > maior ? idade : maior
);
elementoMaiorIdade.innerText = `c) Maior idade: ${maiorIdade}`;

const idadesImpares = idades.filter(idade => idade % 2 !== 0);
elementoIdadesImpares.innerText = `d) Idades ímpares: ${idadesImpares.join(", ")}`;

const todosMaioresIdade = idades.every(idade => idade >= 18);
elementoTodosMaioresIdade.innerText =
    `e) Todos são maiores de idade? ${todosMaioresIdade}`;

const valorInformado = Number(prompt("Informe uma idade para verificar se todas são maiores ou iguais:"));
const todasMaioresValor = idades.every(idade => idade >= valorInformado);
elementoTodasIdadesMaioresValor.innerText =
    `f) Todas as idades são >= ${valorInformado}? ${todasMaioresValor}`;

const valorFiltro = Number(prompt("Informe uma idade para filtrar idades maiores ou iguais:"));
const idadesFiltradas = idades.filter(idade => idade >= valorFiltro);
elementoIdadesFiltradas.innerText =
    `g) Idades >= ${valorFiltro}: ${idadesFiltradas.join(", ")}`;

const valorMediaFiltro = Number(prompt("Informe uma idade para calcular a média das maiores ou iguais:"));
const idadesParaMedia = idades.filter(idade => idade >= valorMediaFiltro);

const mediaIdadesFiltradas = idadesParaMedia.length > 0
    ? idadesParaMedia.reduce((acumulador, idade) => acumulador + idade, 0) / idadesParaMedia.length
    : 0;

elementoMediaIdadesFiltradas.innerText =
    `h) Média das idades >= ${valorMediaFiltro}: ${mediaIdadesFiltradas.toFixed(2)}`;