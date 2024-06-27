let num = window.document.getElementById('add');
let lista = document.getElementById('numeros');
let res = document.getElementById('res');
let numb = []

function isNumero(n) {
    if(Number(n) >=1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, numb)){
        window.alert('ok')
    } else{
        window.alert('Valor invalido ou ja existente')
    }
}
