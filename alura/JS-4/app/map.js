function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => { //Utilizado para "mapear" o array e mudar algum elemento em específico
        return {...livro, preco: livro.preco - (livro.preco * desconto)} // utilizamos o ... (spread) para disponibilizar os elementos que vao dentro de cada array 
    })                    //-> neste caso pegaos o preço dentro do array com o spread para aplicarmos o desconto 
    return livrosComDesconto // retornamos um novo array com o preço sendo alterado.
}

//MAP NECESSITA DE RETURN POIS ELE RETORNA UM NOVO ARRAY BASEADO NO ARRAY ORIGINAL

/* pessoas = [{
    pessoa1 : {
        nome : 'pedro',
        idade : 26,
        altura: 176,
    },
    pessoa2 : {
        nome : 'lucas',
        idade : 23,
        altura: 180,
    },
    pessoa3 : {
        nome : 'marcos',
        idade : 20,
        altura: 150,
    },
}]

console.log(pessoas)

const alturaMaior = 10
novaAltura = pessoas.map(pessoa => {
    return {...pessoa,altura: pessoa.altura * alturaMaior}
})
console.log(novaAltura) */