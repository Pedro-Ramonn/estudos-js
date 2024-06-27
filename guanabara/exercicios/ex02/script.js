function enviar() {
    let data = new Date();
    let anoAtual = data.getFullYear();
    let ano = window.document.getElementById('ano');
    let res = document.getElementById('mensagem')

    if(ano.value <= 1900 || ano.value > anoAtual){
        window.alert('[ERRO], valores erroneos')
    } else {
        let formSex = document.getElementsByName('radSex');
        let idade = anoAtual - Number(ano.value);
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
            if(formSex[0].checked) {
                genero = 'Homem'
                    if(idade >= 0 && idade < 10){
                        //criança
                        imagem.setAttribute('src','crianca_homem.jpg');
                    } else if(idade < 21){
                        //jovem
                        imagem.setAttribute('src','jovem_homem.jpg');
                    } else if(idade < 50){
                        //adulto
                        imagem.setAttribute('src','adulto_homem.jpg');
                    } else {
                        //idoso
                        imagem.setAttribute('src','idoso_homem.jpg');
                    }
            } else if(formSex[1].checked) {
                genero = 'Mulher'
                    if(idade >= 0 && idade < 10){
                        //criança
                        imagem.setAttribute('src','crianca_mulher.jpg');
                    } else if(idade < 21){
                        //jovem
                        imagem.setAttribute('src','jovem_mulher.jpg');
                    } else if(idade < 50){
                        //adulto
                        imagem.setAttribute('src','adulto_mulher.jpg');
                    } else {
                        //idoso
                        imagem.setAttribute('src','idodsa_mulher.jpg');
                    }
            }
        res.innerHTML = `Você tem ${idade} anos e é ${genero}.`
        res.appendChild(img)
    }
}