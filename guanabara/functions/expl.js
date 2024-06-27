//toda função possui :
// - chamada ou evento
// - parâmetros (nem todas possuem)
// - ação
// - retorno (nem todas possuem)

// exemplo :
// function ação(parametro){
//     return res
//}

//função para saber se um numero é par ou impar
function parImpar(numero){
    if(numero % 2 == 0){
        return 'Par'
    } else {
        return 'Ímpar'
    }
}

let res = parImpar(122)
console.log(res)

//basicamente ele pega o valor que foi enviado através de uma variavel
// e injeta diretamente dentro do parametro, no caso 122 vai ser o numero
// que aparece dentro de parImpar(numero)