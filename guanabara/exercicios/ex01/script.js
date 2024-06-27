function carregar() {
let mensagem = window.document.getElementById('mensagem');
let imagem = window.document.getElementById('imagem');
let data = new Date();
let hora = data.getHours();

mensagem.innerHTML = `Agora são ${hora} horas.`
if(hora < 12){
    imagem.src = 'manha.jpg';
    mensagem.innerHTML += ` Bom dia!`;
    document.body.style.backgroundColor = '#66b9e9';
} else if(hora < 18){
    imagem.src = 'tarde.jpg';
    mensagem.innerHTML += ` Boa tarde!`;
    document.body.style.backgroundColor = '#93a77a';
} else{
    imagem.src = 'noite.jpg';
    mensagem.innerHTML += ` Boa noite!`;
    document.body.style.backgroundColor = '#546170'
}
}

