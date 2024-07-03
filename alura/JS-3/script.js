// json-server --watch alura/JS-3/backend/videos.json

const containerVideos = window.document.querySelector(".videos__container");

async function chamandoVideos(){
    try{ //utilizado para TENTAR executar o código que está dentro dele, caso não consiga, é jogado par o catch
        const api = await fetch("http://localhost:3000/videos") //maneira em que se busca(fetch) uma API
        const videos = await api.json();
            videos.forEach((video) => {  //agora utilizo um forEach() porque PARA CADA video que eu receber, quero atribuir uma função a eles
                if(video.categoria == ""){
                    throw new Error('Vídeo não tem categoria');
                }
                containerVideos.innerHTML +=
                `
                <li class="videos__item">
                    <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowFullscreen></iframe>
                    <div class="descricao-video">
                        <img class="img-canal" src="${video.imagem}" alt="logo do canal">
                        <h3 class="titulo-video">${video.titulo}</h3>
                        <p class="titulo-canal">${video.descricao}</p>
                    </div>          
                </li>
                `;
            })   //nesse caso, quero que para cada item dentro do forEach() ele adicione no HTML atraves do innerHTML essa seção com o <li></li>
    } catch(error){ //resposta para uma tentativa falha do try, neste caso utilizaremos como um erro
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
    }
    finally{
        //utilizado apos o try catch e sempre será executado independentemente se passou pelo try ou pelo catch
    }
}

chamandoVideos();

const barraDePesquisa = document.querySelector(".pesquisar__input");

barraDePesquisa.addEventListener("input", filtrarPesquisa);

function filtrarPesquisa(){
    const videos = document.querySelectorAll(".videos__item");

    if(barraDePesquisa.value != ""){
        for(let video of videos){
            let titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
            let valorFiltro = barraDePesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)){
                video.style.display = "none";
            } else {
                video.style.display = "block";
            }

        }
    } else {
        video.style.display = "block";
    }
}

const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}
