console.log(`Trabalhando com Listas`);

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`

);

const idadeComprador = 19;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possiveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador Maior de Idade")
//     listaDeDestinos.splice(1, 1); //deletando elementos, comecando sempre na contagem de 0;
// }
// else if (estaAcompanhada) {
//         console.log("Comprador esta acompanhado");
//         listaDeDestinos.splice(1, 1);
//     } else {
//         console.log("Nao eh maior de idade, nao posso vender!")
//     }

if (
    idadeComprador >= 18 || estaAcompanhada ==true) {
    console.log("Boa viagem!")
    listaDeDestinos.splice(1, 1); //deletando elementos, comecando sempre na contagem de 0;
} else {
    console.log("Nao eh maior de idade, nao posso vender!")
}

console.log("Embarqeu: \n\n")
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("voce nao pode embarcar");
}

console.log(listaDeDestinos);

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);

