// json-server --watch alura/JS-3/backend/videos.json

const containerVideos = window.document.querySelector(".videos__container");

const api = fetch("http://localhost:3000/videos") //maneira em que se busca(fetch) uma API
.then(res => (res).json()) 
.then((videos) => //pego todos os videos que vieram da API e uso o parametro videos para nomear esses dados que eu recebi
    videos.forEach((video) => {  //agora utilizo um forEach() porque PARA CADA video que eu receber, quero atribuir uma função a eles
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
)
.catch((error) => {
    containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`
})
