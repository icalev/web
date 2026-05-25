let filmes = [];
let resultado = document.getElementById("resultado");

async function carregarFilmes() {

    const resposta =
    await fetch(
    "https://api.tvmaze.com/search/shows?q=girls"
    );

    filmes =
    await resposta.json();

    mostrarTela(filmes);

}

function filtrar() {

    const texto =
    document
    .getElementById(
    "busca"
    )
    .value
    .toLowerCase();

    const filtrados =
    filmes.filter(
    filme =>

    filme.show.name
    .toLowerCase()
    .includes(texto)

    );

    mostrarTela(
    filtrados
    );

}

function mostrarTela(lista){

resultado.innerHTML = "";

if(lista.length === 0){

resultado.textContent =
"Nenhum filme encontrado";

return;

}

lista.forEach(filme => {

const img =
document.createElement(
"img"
);

if(
filme.show.image
){

img.src =
filme.show.image.medium;

}

else{

img.src =
"https://via.placeholder.com/210x295";

}

img.alt =
`Imagem do filme ${filme.show.name}`;

img.classList.add(
"card-img-top"
);

const titulo =
document.createElement(
"p"
);

titulo.textContent =
filme.show.name;

titulo.classList.add(
"m-2"
);

const genero =
document.createElement(
"p"
);

genero.textContent =
`Gênero(s): ${
filme.show.genres.join(", ")
}`;

genero.classList.add(
"m-2"
);

const nota =
document.createElement(
"p"
);

if(
filme.show.rating.average
=== null
){

nota.textContent =
"Avaliação: N/A";

}

else{

nota.textContent =
`Avaliação: ${
filme.show.rating.average
}`;

}

nota.classList.add(
"m-2"
);

const card =
document.createElement(
"div"
);

card.classList.add(
"card"
);

card.style.width =
"16rem";

card.style.padding =
"5px";

card.style.borderRadius =
"10px";

card.appendChild(
img
);

card.appendChild(
titulo
);

card.appendChild(
genero
);

card.appendChild(
nota
);

resultado.appendChild(
card
);

});

}

carregarFilmes();