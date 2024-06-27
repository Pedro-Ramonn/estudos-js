//o parametro da uma previa tambem para mostrar o que
// a função irá receber

function soma(n1, n2, n3, n4) {
    return n1 + n2 - n3 + n4
}

let calculo = soma(3, 4, 2, 1)
console.log(calculo)

//pode se criar uma variavel que recebe uma função

let v = function(x) {
    return x*2
}

console.log(v(4))