//obejct
let pessoa1 = {
    nome: "Joao",
    cpf: 123,
    endereco: {
        nomeRua: "nome da rua",
        cep: 1333
    }
}

let pessoa2 = {
    nome: "Pedro",
    cpf: 124
}

console.log(`Cadastro: ${pessoa1.nome} - ${pessoa1.cpf} - ${pessoa1.endereco.nomeRua} - ${pessoa1.endereco.cep}`);
console.log(`Cadastro: ${pessoa2.nome} - ${pessoa2.cpf}`);

//for para percorrer o object
//para o obejct do endereco aparecer você vai precisar abri-lo
for (let key in pessoa1){
    console.log(key + ' - ' + pessoa1[key]);
}

//array
//não precisa ser const, pode ser let
const arr = [11, 3, 7, "três", 99, {numero: 15}, 15, [12, 17]];

for (let i = 0; i < arr.length; i++){
    console.log(i + ' - ' + arr[i]);
}

// utilizando o for (let key in)
for (let key in arr){
    console.log(key + ' - ' + arr[key]);
}

//dica sobre o o exercicio, primeiro indice linha e segundo indice coluna
let A = [[1, 2], [3, 4]]
