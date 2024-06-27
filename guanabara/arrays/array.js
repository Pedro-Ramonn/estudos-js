let num = [2, 5 , 7 , 3 , 1 , 4 , 0 , 6]
num.sort() //ordena em ordem crescente os valores dentro do array

//forma simplificada de usar o for para arrays
for(let pos in num){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

//podemos escrever da forma normal também

for(let pos = 0 ; pos < num.length;  pos++ ){
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}

