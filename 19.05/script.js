document
.getElementById("formTarefa")

.addEventListener(

"submit",

function(e){

e.preventDefault();

criar_tarefa();

}

);

function criar_tarefa(){

let nome =
document
.getElementById("nome")
.value;

let prioridade =
document
.getElementById(
"prioridade"
)
.value;

let container =
document
.getElementById(
"tc"
);

let texto =
document
.createElement(
"p"
);

texto.innerText =
nome;

let card =
document
.createElement(
"div"
);

card.appendChild(
texto
);

card.classList.add(
"cardTarefa"
);

if(
prioridade ===
"Alta"
){

card.classList.add(
"alta"
);

}

else if(
prioridade ===
"Média"
){

card.classList.add(
"media"
);

}

else{

card.classList.add(
"baixa"
);

}

container
.appendChild(
card
);

document
.getElementById(
"nome"
).value = "";

}