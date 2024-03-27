function transporMatriz(A){
    console.log('Matriz:');
    let linha = '';
    for (let i = 0; i < A.length; i++){
        for (let j = 0; j < A[i].length; j++){
            linha += A[i][j] + '\t';
        }
        linha += '\n';
    }
    console.log(linha);

    console.log('Matriz Transposta:');
    let linhaTransposta = '';
    for (let j = 0; j < A[0].length; j++){
        for (let i = 0; i < A.length; i++){
            linhaTransposta += A[i][j] + '\t';
        }
        linhaTransposta += '\n';
    }
    console.log(linhaTransposta);
}

const A =[
    [1,2],
    [3,4],
    [5,6]
];

transporMatriz(A);