console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `Sao Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `Sao Paulo`,
    `Rio de Janeiro`
    
);

listaDeDestinos.push(`Curitiba`)
console.log("Destinos possiveis:");
//console.log(salvador, saoPaulo, rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1,1); //deletando elementos, comecando sempre na contagem de 0;
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[0]); //selecionar  o elemento que quero imprimir